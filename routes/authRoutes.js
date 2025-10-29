const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);
router.post('/sendOTP', authController.sendOTP);
router.post('/verifyOTP', authController.verifyOTP);
router.post('/resendOTP', authController.resendOTP);

// // ✅ New routes for OTP flow
// router.post('/sendOTP', authController.sendOTP);
// router.post('/verifyOTP', authController.verifyOTP);
// router.post('/resendOTP', authController.resendOTP);

module.exports = router;
