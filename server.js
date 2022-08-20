const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors());

app.use(express.json());
app.post('/api/user', (req, res) => {
    setTimeout(() => {
        res.send(req.body)
    }, 1500)
})
app.listen('5000', () => {
    console.log("running well")
})