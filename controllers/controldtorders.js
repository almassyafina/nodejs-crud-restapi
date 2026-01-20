const db = require('../config/db.js');

// CREATE ORDER
exports.createorders = (req, res) => {
    const { cust_id, user_id, total, method_id } = req.body;
    const order_date = new Date();

    db.query(
        'INSERT INTO orders (ORDER_DATE, CUST_ID, USER_ID, TOTAL, METHOD_ID) VALUES (?, ?, ?, ?, ?)',
        [order_date, cust_id, user_id, total, method_id],
        (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: "Gagal menambahkan order", error: err });
            }

            res.json({
                message: "Order berhasil ditambahkan!",
                id: results.insertId
            });
        }
    );
};

// READ ALL ORDERS
exports.getorders = (req, res) => {
    db.query('SELECT * FROM orders ORDER BY ORDER_DATE DESC', (err, results) => {
        if (err) {
            return res.status(500).json({
                status: "Error",
                message: "Gagal mengambil data",
                error: err.message
            });
        }

        res.status(200).json({
            status: "Success",
            data: results
        });
    });
};

// SHOW ORDER BY ID
exports.showorders = (req, res) => {
    const { order_id } = req.params;

    db.query('SELECT * FROM orders WHERE ORDER_ID = ?', [order_id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });

        if (results.length === 0) {
            return res.status(404).json({ message: 'Order tidak ditemukan' });
        }

        res.status(200).json(results[0]);
    });
};

// UPDATE ORDER
exports.updateorders = (req, res) => {
    const { order_id } = req.params;
    const { total, method_id, bank_trans, receipt_number } = req.body;

    db.query(
        `UPDATE orders 
         SET TOTAL = ?, METHOD_ID = ?, BANK_TRANS = ?, RECEIPT_NUMBER = ?
         WHERE ORDER_ID = ?`,
        [total, method_id, bank_trans, receipt_number, order_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message });

            if (results.affectedRows === 0) {
                return res.status(404).json({ message: 'Order tidak ditemukan' });
            }

            res.json({ message: 'Order berhasil diupdate' });
        }
    );
};

// DELETE ORDER
exports.deleteorders = (req, res) => {
    const { order_id } = req.params;

    db.query('DELETE FROM orders WHERE ORDER_ID = ?', [order_id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: 'Order tidak ditemukan' });
        }

        res.json({ message: 'Order berhasil dihapus' });
    });
};
