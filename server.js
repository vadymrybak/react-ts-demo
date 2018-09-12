const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
    const key = "query";
    const query = req.query[key];

    setTimeout( () => res.send(`{"your query was":  "${query}" }`), 5000);
});

app.get('/api/bye', (req, res) => {
    res.header("Content-Type", "text/cache-manifest");

    setTimeout( () => res.status(200).send('{ "data": "test" }}}}}}') , 400);
});

app.get('/api/hi', (req, res) => {
    const sub = {

        lastName: "Rybak",
        name : "Vadym",
        
        
    };
    setTimeout( () => res.status(200).send(sub), 300);
});

app.listen(port);