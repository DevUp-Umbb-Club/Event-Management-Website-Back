const express = require('express');
const eventRoutes = require('./EventRoutes');
const router = express.Router();

router.use('/events', eventRoutes);

module.exports = router;
