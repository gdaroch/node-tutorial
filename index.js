const express = require('express');
const colors = require('colors');

const server = express();

server.get('/', (request, response) => {
  response.send('<h1>Hello World from Express and NodeJS</h1>');
});

server.listen(3000, () => {
  console.log('Server on port 3000'.yellow);
});
