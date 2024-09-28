const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
    console.log('hello from initial');
});

app.get('/api', (req, res) => {
    res.json({message: 'Hello from server!'});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})