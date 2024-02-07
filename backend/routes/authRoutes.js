// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const { signUp,signIn, updateUser } = require('../controllers/authController');
const validateRequest = require('../middlewares/validateRequest');
const checkUserExists = require('../middlewares/checkUserExists');
const signUpSchema = require('../schemas/signUpSchema'); 
const signInSchema = require('../schemas/signInSchema'); 
const updateUserSchema = require('../schemas/updateUserSchema');
const { authMiddleware } = require('../middlewares/authMiddleware');

router.post('/sign_up', validateRequest(signUpSchema), checkUserExists, signUp);
router.post('/sign_in',validateRequest(signInSchema),signIn)
router.post('/update_user',validateRequest(updateUserSchema),authMiddleware,updateUser)


module.exports = router;