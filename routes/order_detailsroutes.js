const express = require('express');
const {
    getorder_details,
    showorder_details,
    createorder_details,
    updateorder_details,
    deleteorder_details
} = require('../controllers/controldtorder_detail');

const router = express.Router();

router.get('/', getorder_details);
router.get('/:id', showorder_details);
router.post('/', createorder_details);
router.put('/:id', updateorder_details);
router.delete('/:id', deleteorder_details);

module.exports = router;
