import express from 'express';
import {
    getkategori,
    showkategori,
    createkategori,
    updatekategori,
    deletekategori
} from '../controllers/controldtkategori.js';

const router = express.Router();

router.get('/', getkategori);
router.get('/:id', showkategori);
router.post('/', createkategori);
router.put('/:id', updatekategori);
router.delete('/:id', deletekategori);

export default router;