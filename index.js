const express = require('express');
const app = express();

const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');
const port = process.env.PORT || 8080;
//import code from database config

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, { useMongoClient: true }, (err) => {
  if(err){
    console.log('Could not connect to the database : ', err);
  } else {
    console.log('Connected to database:' + config.db );
  }
});

app.use(express.static(__dirname + '/public'));

//no matter what they use - it will go to home screen when they enter the path
app.get('*', (req, res) => {
  //res.send('hello world');
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.listen(port,()=> {
  console.log('listening to port' +port);
});
