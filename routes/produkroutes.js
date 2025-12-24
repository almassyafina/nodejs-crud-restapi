import express from 'express';
import {
    getproduct,
    showproduct,
    createProduct,
    updateProduct,
    deleteProduct
} from '../controllers/controldtproduk.js';

const router = express.Router();

router.get('/', getproduct);
router.get('/:id', showproduct);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;