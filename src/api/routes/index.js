const express = require('express');
const eventRoutes = require('./EventRoutes');
const authRoutes = require('./AuthRoutes');
const {requireAuth, checkUser} = require('../middleware/authMiddleware');
const router = express.Router();

router.get('*', checkUser);
router.use('/events',requireAuth, eventRoutes);
router.use('/auth', authRoutes);


module.exports = router;
