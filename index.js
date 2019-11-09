const http = require('http');

const server = http.createServer();
const PORT = 3000;

server.on('request', (req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!');
});

server.listen(PORT, () => {
  console.log(`🚀  Listening on port ${PORT}!`);
});
