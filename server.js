const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

// routes
const users = require('./routes/api/users');
const items = require('./routes/api/items');

const app = express();



// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// DB config
const db = require('./config/keys_dev').mongoURI;


// Connect to MongoDB
mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err)) 


// Routes
app.use('/api/users', users)
app.use('/api/lists', items)


const port  = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));