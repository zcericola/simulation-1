const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const massive = require('massive');
const mainController = require("./controllers/main-controller");
require('dotenv').config();
app.use(bodyParser.json());
app.use(cors());

//sets up massive for use with the database
massive(process.env.CONNECTION_STRING).then(dbInstance => {
    app.set('db', dbInstance);
}).catch(console.log)




//endpoints go here
app.get('/api/shelf/:id', mainController.getShelves);


const portNum = 3002;
//making sure that express is listening
app.listen( portNum, () => {
    console.log(`Awaiting further instructions on port ${portNum}`);
})

