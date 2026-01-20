const db = require('../config/db.js');
const path = require('path');

// ================= CREATE PRODUK =================
exports.createProduct = (req, res) => {
    const { product_name, price, category_id, stock, created_at, created_by, updated_at, updated_by } = req.body;

    // Jika ada file gambar
    const image = req.file ? req.file.filename : null;

    db.query(
        `INSERT INTO products (product_name, price, category_id, stock, image, created_at, created_by, updated_at, updated_by)
         VALUES (?,?,?,?,?,?,?,?,?)`,
        [product_name, price, category_id, stock, image, created_at, created_by, updated_at, updated_by],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message });
            res.json({ message: 'Produk berhasil dibuat', productId: results.insertId });
        }
    );
};

// ================= GET ALL PRODUK =================
exports.getproduct = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        res.json(results);
    });
};

// ================= GET PRODUK BY ID =================
exports.getproductById = (req, res) => {
    const { id } = req.params;

    db.query(
        'SELECT * FROM products WHERE PRODUCT_ID = ?',
        [id],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message });
            if (results.length === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
            res.json(results[0]);
        }
    );
};

// ================= GET PRODUK BY KATEGORI =================
exports.getproductByCategories = (req, res) => {
    const { categoryId } = req.params;

    db.query(
        'SELECT * FROM products WHERE CATEGORY_ID = ?',
        [categoryId],
        (err, results) => {
            if (err) return res.status(500).json({ message: err.message });
            if (results.length === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
            res.json(results);
        }
    );
};

// ================= UPDATE PRODUK =================
exports.updateProduct = (req, res) => {
    const { id } = req.params;
    const { product_name, price, category_id, stock } = req.body;

    // Jika ada file gambar baru
    const image = req.file ? req.file.filename : null;

    let query = 'UPDATE products SET product_name=?, price=?, category_id=?, stock=?';
    let params = [product_name, price, category_id, stock];

    if (image) {
        query += ', image=?';
        params.push(image);
    }

    query += ' WHERE PRODUCT_ID=?';
    params.push(id);

    db.query(query, params, (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
        res.json({ message: 'Produk berhasil diupdate' });
    });
};

// ================= DELETE PRODUK =================
exports.deleteProduct = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM products WHERE PRODUCT_ID=?', [id], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Produk tidak ditemukan' });
        res.json({ message: 'Produk berhasil dihapus' });
    });
};
