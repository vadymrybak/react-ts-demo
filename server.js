const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
    setTimeout( () => res.send({ express: 'Hello From Express' }), 5000);
});

app.get('/api/bye', (req, res) => {
    setTimeout( () => res.send({ express: 'Good bye From Express' }), 2000);
});

app.get('/api/hi', (req, res) => {
    setTimeout( () => res.send({ express: 'Good bye From Express' }), 7000);
});

app.listen(port);