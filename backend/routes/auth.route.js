import express from 'express';
import { loginUser,  logoutUser, signupUser } from "../controller/auth.controller.js"
import protectRoute from '../middlewares/protectRoute.middleware.js';

const router = express.Router();

router.post('/signup', signupUser)
router.post('/login', loginUser)
router.post('/logout', protectRoute,logoutUser)

export default router