const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

// Route to serve the home.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

// Route to serve the nounentry.html file
app.get('/nounentry', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'nounentry.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
