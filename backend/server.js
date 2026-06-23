const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Backend API Running Successfully');
});

app.get('/api', (req, res) => {
    res.json({
        project: "Docker Multi-Container Project",
        status: "Running",
        backend: "Node.js Container"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
