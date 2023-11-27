//Modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
//Database Calls
const findUserByUsername = require('../databaseCalls/users/findUserByUsername');
const insertIntoUsers = require('../databaseCalls/users/insertIntoUsers');
// Others
const { isStringEmpty, validationResult } = require('../../ utilites/helperFunctions');
const config = require('config');


// Register user
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        const errors = validationResult([isStringEmpty(username, 'Username is required'), isStringEmpty(username, 'Password is required')]);
        if (errors.length > 0) {
            return res.status(400).json({ errors });
        }
        // see if user exists
        const userByName = await findUserByUsername(username);
        if (userByName) {
            return res.status(400).json({ errors: [{ msg: 'User already exists' }] });
        }
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // register user
        const user = await insertIntoUsers(username, hashPassword);
        // return jsonwebtoken
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