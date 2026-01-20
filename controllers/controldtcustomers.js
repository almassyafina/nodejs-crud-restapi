const db = require('../config/db.js');

// 1. MENAMPILKAN DATA DARI TABLE
exports.getcustomers = (req, res) => {
    db.query('SELECT * FROM customers', (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json(results);
    });
};

// 2. MENYIMPAN DATA
exports.insertcustomers = (req, res) => {
    const { name, email, password } = req.body;

    db.query(
        "INSERT INTO customers (name, email, password) VALUES (?,?,?)",
        [name, email, password],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: 'Data berhasil disimpan' });
        }
    );
};

// 3. MENAMPILKAN DATA BERDASAR ID
exports.showcustomers = (req, res) => {
    const { id } = req.params;

    db.query("SELECT * FROM customers WHERE id=?", [id], (err, results) => {
        if (err) return res.status(500).json({ message: err });

        if (results.length === 0) {
            return res.status(404).json({ message: 'User tidak ditemukan' });
        }

        res.json(results[0]);
    });
};

// 4. UPDATE DATA BERDASARKAN ID
exports.updatecustomers = (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;

    db.query(
        'UPDATE customers SET name=?, email=? WHERE id=?',
        [name, email, id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: 'Customer berhasil diupdate' });
        }
    );
};

// 5. DELETE DATA BERDASARKAN ID
exports.deletecustomers = (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM customers WHERE id=?", [id], (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json({ message: "User berhasil dihapus" });
    });
};
