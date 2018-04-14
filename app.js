const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/db');
const path = require('path');

//connect to db
mongoose.connect(config.database);

//on connect
mongoose.connection.on('connected', function(){
  console.log('Connected to database: ' + config.database);
})

//check for db connection error
mongoose.connection.on('error', function(err){
  console.log('There was an error connecting to database: ' + err);
})

//Initialise express
const app = express();

//set routes
const game = require('./routes/game');

//set port
const  port = 3000;

//CORS middleware
app.use(cors());

//set static folder -- ??? WONT NEED THIS IF INSTALLING ANGULAR LATER
app.use(express.static(path.join(__dirname, 'public')));

//bosd-parser middleware
app.use(bodyParser.json());

//passport middlware -- WILL INSTALL LATER

//use '/game' for all routes
app.use('/', game);


//start server
app.listen(port, function(){
  console.log('Server running on port: ' + port);
})
