const http = require('http');
const colors = require('colors');

const port = 3000;

const handleServer = (request, response) => {
  response.writeHead(200, { 'Content-type': 'text/html' });
  response.write('<h1>Hello World from NodeJS</h1>');
  response.end();
}

const server = http.createServer(handleServer);

server.listen(port, () => {
  console.log(`Server on port ${port}.`.green);
});
