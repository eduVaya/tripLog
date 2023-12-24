// Modules
const express = require('express');
const path = require('path');
const router = express.Router();
// Database Calls
const insertIntoPosts = require('../databaseCalls/posts/insertIntoPosts');
// Others
const auth = require('../../middleware/validateToken');

// Manage file
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/images')
    },
    filename: (req, file, callback) => {
        return callback(null, `${Date.now()}_${path.extname(file.originalname)}`);
    }
});
const upload = multer({ storage })

// create post
router.post('/', auth, upload.single('file'), async (req, res) => {
    const { title, description } = JSON.parse(req.body.data);
    const image = req.file.path
    try {
        const post = await insertIntoPosts(req.user.user_id, { title, description, image });
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