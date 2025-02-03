const express = require('express');
const AuthControllers = require('../controllers/AuthControllers');

const router = express.Router();

router.post('/register', AuthControllers.register_post);
router.post('/login', AuthControllers.login_post);
router.get('/logout', AuthControllers.logout_get);
module.exports = router;