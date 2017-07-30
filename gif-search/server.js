const http = require('http');
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/build'));

const server = http.createServer(app);

server.listen(port, err=>{
  if (err) return console.error(err);
  console.log(`Server running on port ${port}`);
});
