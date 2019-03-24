const express = require('express');
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


let recipes = [];

let apiTest = {};

app.post('/api/recipes', (req, res) => {
  apiTest = req.body;
  res.send(apiTest);
});

app.get('/api/recipes', (req, res) => {
  res.send(apiTest);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});
/*
app.get('/api/servers', (req, res) => {
  res.send(servers);
});

app.get('/api/servers/:id', (req, res) => {
  const server = servers.find(c => c.id === parseInt(req.params.id));
  if (!server) {
    res.status(404).send('The server with a given ID was not found');
  } else {
    res.send(server);
  }
});

app.post('/api/servers', (req, res) => {
  if (!res.body.name || !(req.body.capacity > 0)) {
    // 400 Bad Request
    // res.status(400).send('Name is required and should be minimum 3 characters.');
    return;
  }
  const server = {
    id: servers.length + 1,
    name: req.body.name,
    capacity: req.body.capacity
  };
  servers.push(server);
  res.send(server);
});
*/
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`))
