const express = require('express');
const router = express.Router();
const auth = require('../../middleware/validateToken');
const findUserByUserId = require('../databaseCalls/users/findUserByUserId');


router.get('/', auth, async (req, res) => {
    try {
        const user = await findUserByUserId(req.user.userid);
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;