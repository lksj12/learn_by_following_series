const express = require('express');
const redis = require('redis');

const PORT = 8080;

const app = express();

const client = redis.createClient({
    url: 'redis://redis-server:6379'
});

client.on('error', (err) => {
    console.error('Redis Client Error', err);
});

async function startServer() {
    await client.connect();

    await client.set('number', 0);

    app.get('/', async (req, res) => {
        const number = await client.get('number');

        await client.set('number', parseInt(number) + 1);

        res.send(`Number is ${number}`);
    });

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

startServer();