const { query } = require('../../../config/db');

module.exports = async (userId) => {
    try {
        const result = await query('SELECT U.username, U.userId FROM users U WHERE U.userId = $1', [userId]);
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