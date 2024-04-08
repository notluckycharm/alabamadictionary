// server.mjs
import { createServer } from 'node:http';
import 'node:url';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
});

// starts a simple http server locally on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});

// run with `node server.mjs`