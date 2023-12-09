const { query } = require('../../../config/db');

module.exports = async (userId, { title = null, description = null, image = null }) => {
    try {
        const result = await query('INSERT INTO posts(user_id, title, description, image) VALUES($1, $2, $3, $4) RETURNING *', [userId, title, description, image]);
        if (result.length <= 0) {
            return false
        } else {
            return result[0];
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
}