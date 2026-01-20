const express = require('express');
const {
    deletecustomers,
    getcustomers,
    insertcustomers,
    showcustomers,
    updatecustomers
} = require('../controllers/controldtcustomers');

const router = express.Router();

router.get('/', getcustomers);
router.post('/', insertcustomers);
router.get('/:id', showcustomers);
router.put('/:id', updatecustomers);
router.delete('/:id', deletecustomers);

module.exports = router;
