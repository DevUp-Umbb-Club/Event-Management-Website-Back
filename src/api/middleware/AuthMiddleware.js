const jwt = require('jsonwebtoken');
const User = require('../models/User');

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
        console.log('Token found:', token);
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decodedToken) => {
            if (err) {
                console.log('Token verification error:', err.message);
                res.redirect('/auth/login');
            } else {
                console.log('Decoded token:', decodedToken);
                if (decodedToken.isPrivileged) {
                    next();
                } else {
                    console.log('User is not privileged');
                    res.redirect('/auth/login');
                }
            }
        });
    } else {
        console.log('No token found');
        res.redirect('/auth/login');
    }
}


//check current user ( to be used later to get current logged in user info to display on the frontend)
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, decodedToken) => {
            if(err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            } else {
                console.log(decodedToken);
                let user = await User.findById(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    } else {
        res.locals.user = null;
        next();
    }
}

module.exports = { requireAuth, checkUser };