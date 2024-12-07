const express = require('express');
const EventControllers = require('../controllers/EventControllers');

const router = express.Router();

router.get('/', EventControllers.getEvents);
router.post('/', EventControllers.createEvent);

module.exports = router;
