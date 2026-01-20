const express = require('express');
const router = express.Router();
const controldtproduk = require('../controllers/controldtproduk');
const multer = require('multer');
const path = require('path');

// ===== KONFIGURASI UPLOAD GAMBAR =====
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'img/'); // folder gambar
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const fileFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Hanya boleh upload file gambar!'), false);
};

const upload = multer({ storage, fileFilter });

// ===== ROUTES =====
// Get all produk
router.get('/', controldtproduk.getproduct);

// Get produk by kategori (letakkan sebelum /:id)
router.get('/category/:categoryId', controldtproduk.getproductByCategories);

// Get produk by id
router.get('/:id', controldtproduk.getproductById);

// Create produk + upload gambar
router.post('/', upload.single('image'), controldtproduk.createProduct);

// Update produk + upload gambar
router.put('/:id', upload.single('image'), controldtproduk.updateProduct);

// Delete produk
router.delete('/:id', controldtproduk.deleteProduct);

module.exports = router;
