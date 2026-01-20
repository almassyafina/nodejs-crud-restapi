const db = require('../config/db.js');

// CREATE DATA DETAIL ORDER
exports.createorder_details = (req, res) => {
    const { qty, price } = req.body;

    db.query(
        'INSERT INTO orders (qty, price) VALUES (?, ?)',
        [qty, price],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Order berhasil ditambahkan!" });
        }
    );
};

// READ DATA ORDER
exports.getorder_details = (req, res) => {
    db.query('SELECT * FROM orders', (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json(results);
    });
};

// SHOW ORDER BY ID
exports.showorder_details = (req, res) => {
    const { order_id } = req.params;

    db.query(
        'SELECT * FROM orders WHERE order_id = ?',
        [order_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message });

            if (results.length === 0) {
                return res.status(404).json({ message: 'Order tidak ditemukan' });
            }

            res.json(results[0]);
        }
    );
};

// UPDATE ORDER
exports.updateorder_details = (req, res) => {
    const { order_id } = req.params;
    const { qty, price } = req.body;

    db.query(
        'UPDATE orders SET qty=?, price=? WHERE order_id=?',
        [qty, price, order_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Order berhasil diupdate" });
        }
    );
};

// DELETE ORDER
exports.deleteorder_details = (req, res) => {
    const { order_id } = req.params;

    db.query(
        'DELETE FROM orders WHERE order_id=?',
        [order_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Order berhasil dihapus" });
        }
    );
};
