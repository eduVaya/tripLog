// Modules
const express = require('express');
const router = express.Router();
// Database Calls
const insertIntoPosts = require('../databaseCalls/posts/insertIntoPosts');
// Others
const auth = require('../../middleware/validateToken');

// create post
router.post('/', auth, async (req, res) => {
    const { title, description } = req.body;
    try {
        const post = await insertIntoPosts(req.user.user_id, { title, description });
        if (!post) {
            res.status(500).send('Server error: ${error.message}');
        }
        res.json(post);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send(`Server error: ${error.message}`);
    }
});

module.exports = router;