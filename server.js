const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    const key = "query";
    const query = req.query[key];
    setTimeout( () => res.send(`{"your query was":  "${query}" }`), 2000);
});

app.get('/api/bye', (req, res) => {
    setTimeout( () => res.send({ express: 'Good bye From Express' }), 400);
});

app.get('/api/hi', (req, res) => {
    setTimeout( () => res.send({ express: 'Good bye From Express' }), 300);
});

app.listen(port);