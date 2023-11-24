const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const database = require('../../config/db');
// const { check, validationResult } = require('express-validator');
//Register user
// const registerValidation = [
//     check('email', 'Please include a valid email').isEmail()
// ];
router.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        // see if user exists
        // const result = await database.query('SELECT * FROM Users');
        // console.log(result.rows);
        // Encrypt password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        // register user
        const registerUserResult = await database.query('INSERT INTO Users(username, password) VALUES($1, $2) RETURNING username, userId', [username, hashPassword]);
        console.log('registerUserResult', registerUserResult);
        // return jsonwebtoken
    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server error');
    }

});


module.exports = router;