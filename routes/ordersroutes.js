const express = require('express');
const {
    getorders,
    showorders,
    createorders,
    updateorders,
    deleteorders
} = require('../controllers/controldtorders');

const router = express.Router();

router.get('/', getorders);
router.get('/:id', showorders);
router.post('/', createorders);
router.put('/:id', updateorders);
router.delete('/:id', deleteorders);

module.exports = router;
