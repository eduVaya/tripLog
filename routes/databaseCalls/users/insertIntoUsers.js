const { query } = require('../../../config/db');

module.exports = async (username, hashPassword) => {
    try {
        const result = await query('INSERT INTO users(username, password) VALUES($1, $2) RETURNING username, user_id', [username, hashPassword]);
        if (result.length <= 0) {
            return false
        } else {
            return result[0];
        }
    } catch (error) {
        console.error('Error:', error.message);

    }

};