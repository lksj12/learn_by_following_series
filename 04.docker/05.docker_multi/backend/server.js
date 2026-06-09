const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();
app.use(bodyParser.json());

// db.pool.query(`CREATE TABLE IF NOT EXISTS lists (
//     id INTEGER AUTO_INCREMENT,
//     value TEXT,
//     PRIMARY KEY (id)
// )`, (error, results, fields) => {
//     console.log('results', results);
// });

app.get('/api/values', (req, res) => {
    console.log('GET /api/values called');

    db.pool.query('SELECT * FROM lists', (error, results) => {
        if (error) {
            console.error('GET /api/values error:', error);
            return res.status(500).json({
                success: false,
                error: error.message,
                code: error.code
            });
        }

        res.json(results);
    });
});

app.post('/api/value', (req, res) => {
    console.log('POST /api/value called:', req.body);

    db.pool.query(
        'INSERT INTO lists (value) VALUES (?)',
        [req.body.value],
        (error, results) => {
            if (error) {
                console.error('POST /api/value error:', error);
                return res.status(500).json({
                    success: false,
                    error: error.message,
                    code: error.code
                });
            }

            res.json({
                success: true,
                value: req.body.value
            });
        }
    );
});

app.listen(5000, () => {
    console.log('Server is running on port 8080');
});