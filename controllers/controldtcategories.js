const db = require('../config/db.js');

// CREATE CATEGORY
exports.createcategories = (req, res) => {
    const { category_id, category } = req.body;

    db.query(
        'INSERT INTO categories (category_id, category) VALUES (?,?)',
        [category_id, category],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Kategori Berhasil di tambahkan!" });
        }
    );
};

// READ DATA CATEGORY
exports.getcategories = (req, res) => {
    db.query('SELECT * FROM categories', (err, results) => {
        if (err) return res.status(500).json({ message: err });

        res.json(results);
    });
};

// SHOW CATEGORY BY ID
exports.showcategories = (req, res) => {
    const { category_id } = req.params;

    db.query(
        'SELECT * FROM categories WHERE category_id = ?',
        [category_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message });

            if (results.length === 0) {
                return res.status(404).json({ message: 'Kategori tidak ditemukan' });
            }

            res.json(results[0]);
        }
    );
};

// UPDATE CATEGORY
exports.updatecategories = (req, res) => {
    const { category_id } = req.params;
    const { category } = req.body;

    db.query(
        'UPDATE categories SET category=? WHERE category_id=?',
        [category, category_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Kategori Berhasil diUpdate" });
        }
    );
};

// DELETE CATEGORY
exports.deletecategories = (req, res) => {
    const { category_id } = req.params;

    db.query(
        'DELETE FROM categories WHERE category_id=?',
        [category_id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err });

            res.json({ message: "Kategori berhasil dihapus" });
        }
    );
};
