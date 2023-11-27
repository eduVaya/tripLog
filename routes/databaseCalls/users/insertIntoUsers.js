const { query } = require('../../../config/db');

module.exports = async (username, hashPassword) => {
    try {
        const result = await query('INSERT INTO users(username, password) VALUES($1, $2) RETURNING username, userId', [username, hashPassword]);
        console.log('result', result);
        if (result.length <= 0) {
            return false
        } else {
            return result[0];
        }
    } catch (error) {
        console.error('Error:', error.message);

    }

};