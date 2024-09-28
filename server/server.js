const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/api', (req, res) => {
    res.json({message: 'Hello from server!'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})