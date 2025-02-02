const User = require('../models/User');
const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id, isPrivileged) => {
    return jwt.sign( {id, isPrivileged}, process.env.JWT_SECRET_KEY, {
        expiresIn: maxAge
    });
}

const AuthControllers = {
    
    async register_post(req, res) {
        try {
            const user = await User.create(req.body);
            const token=createToken(user._id, user.isPrivileged);
            res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
            res.status(201).json({ user: user._id });
        } catch (error) {
            console.log(error);
            res.status(400).send('Error saving user');
        }
    },

    async login_post(req, res) {
        const {email, password} = req.body;
        try {
            const user = await User.login(email, password);
            const token = createToken(user._id, user.isPrivileged);
            res.cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000});
            res.status(200).json({ user: user._id });
        }
        catch (error) {
            console.log(error);
            res.status(400).send('Error logging in');
    }
},

    async logout_get(req, res) {
        res.cookie('jwt', '', {maxAge: 1});
        res.redirect('/auth/login');
    }

};

module.exports = AuthControllers;