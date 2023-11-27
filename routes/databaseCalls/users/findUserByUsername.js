const { query } = require('../../../config/db');

module.exports = async (username = '') => {
    try {
        const result = await query('SELECT * FROM users WHERE LOWER(username) = LOWER($1);', [username]);
        if (result.length <= 0) {
            return false
        } else {
            return result[0];
        }
    } catch (error) {
        console.error('Error:', error.message);

    }

};