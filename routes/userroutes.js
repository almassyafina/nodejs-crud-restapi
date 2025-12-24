import express from 'express';
import { deleteUser, getUsers, insertUser, showUsers, updateUser } from '../controllers/controldtuser.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', insertUser);
router.get('/:id', showUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;