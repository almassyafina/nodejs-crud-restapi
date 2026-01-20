const express = require('express');
const {
    getcategories,
    showcategories,
    createcategories,
    updatecategories,
    deletecategories
} = require('../controllers/controldtcategories');
const { getproductByCategories } = require('../controllers/controldtproduk');

const router = express.Router();

router.get('/', getcategories);
router.get("/category/:categoryId", getproductByCategories);
router.get('/:id', showcategories);
router.post('/', createcategories);
router.put('/:id', updatecategories);
router.delete('/:id', deletecategories);

module.exports = router;
