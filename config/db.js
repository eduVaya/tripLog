const { Client, Pool } = require('pg');
const config = require('config');

const database = new Pool(config.get('pgConnection'));
database.connect(() => console.log('Database conected'));


const query = async (sql = '', values = false) => {
    try {
        const result = values ? await database.query(sql, values) : await database.query(sql);
        return result.rows;

    } catch (error) {
        console.error('Error:', error.message);
    }
}

// module.exports = database;
module.exports = {
    query
};