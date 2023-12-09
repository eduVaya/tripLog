//Modules
const express = require('express');
const router = express.Router();
const auth = require('../../middleware/validateToken');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
//Database Calls
const findUserByUserId = require('../databaseCalls/users/findUserByUserId');
const findUserByUsername = require('../databaseCalls/users/findUserByUsername');
// Others
const { isStringEmpty, validationResult } = require('../../ utilites/helperFunctions');
const config = require('config');


// find user by id
router.get('/', auth, async (req, res) => {
    try {
        const user = await findUserByUserId(req.user.user_id);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

// Login user
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        const errors = validationResult([isStringEmpty(username, 'Username is required'), isStringEmpty(username, 'Password is required')]);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
        // see if user exists
        const user = await findUserByUsername(username);
        if (!user) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
        }
        const payload = { user };
        jwt.sign(payload, config.get('jwtSecret'), { expiresIn: 360000 }, (error, token) => {
            if (error) throw error;
            res.json({ token });
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(`Server error: ${error.message}`);
    }
});
module.exports = router;