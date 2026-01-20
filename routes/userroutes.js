const express = require('express');
const router = express.Router();
const controldtuser = require('../controllers/controldtuser');

// Definisi Route Standar
router.get('/', controldtuser.getAllUsers);
router.get('/:id', controldtuser.getUserById);
router.post('/', controldtuser.createUser);
router.put('/:id', controldtuser.updateUser);
router.delete('/:id', controldtuser.deleteUser);

module.exports = router;