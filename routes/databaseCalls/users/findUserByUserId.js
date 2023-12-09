const { query } = require('../../../config/db');

module.exports = async (userId) => {
    try {
        const result = await query('SELECT U.username, U.user_id FROM users U WHERE U.user_id = $1', [userId]);
        if (result.length <= 0) {
            return false
        } else {
            return result[0];
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
};