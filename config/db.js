const { Client, Pool } = require('pg');
const config = require('config');

const database = new Pool(config.get('pgConnection'));
database.connect(() => console.log('Database conected'));

module.exports = database;
// module.exports = {
//     connectDB: () => {

//     }
// };