const express = require('express');

const PORT = 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Hi!');
});

app.listen(PORT);

console.log(`Server is running on port ${PORT}`);