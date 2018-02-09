const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const portNum = 3002;


app.listen( portNum, () => {
    console.log(`Awaiting further instructions on port ${portNum}`);
})

