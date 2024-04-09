const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from 'public' directory

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
