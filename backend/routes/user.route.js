import express from 'express';
import protectRoute from '../middlewares/protectRoute.middleware.js';
import { deleteUser, getUsers } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', protectRoute, getUsers)
router.delete('/:userId', protectRoute, deleteUser)


export default router