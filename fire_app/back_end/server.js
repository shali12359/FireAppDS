// REQUIRE MODULES
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// REQUIRE FILES
const fireSensorRouter = require('./routes/fireSensorRoute');
const usersRouter = require('./routes/UserRoute');

// REQUIRE DOTENV FILE
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// USE MODULES
app.use(cors());
app.use(express.json());

// MONGODB URI
const uri = process.env.ATLAS_URI;

// CONNECT TO MONGOBD
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Mongo db connection established successfully...');
});

// USE ROUTES
app.use('/fireSensor', fireSensorRouter);
app.use('/users', usersRouter);

// RUN SERVER
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
