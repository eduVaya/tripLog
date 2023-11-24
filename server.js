const express = require('express');
const { Pool } = require('pg');
const config = require('config');
// const database = new Pool(config.get('pgConnection'));



const app = express();

//Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));


app.get('/test', (req, res) => {
    database.query(`SELECT * FROM testUser`, (error, response) => {
        if (!error) {
            console.log(response.rows);
        } else {
            console.log(error.message);
        }
        database.release(true);
    })
});
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));