require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const allRoutes = require('./routes/v1/index');

const mongoString = process.env.DATABASE_URL;

mongoose.set('strictQuery', false);
mongoose.connect(mongoString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', (error) => {
  console.log(error);
});

database.once('connected', (connected) => {
  console.log('Database connected');
});

app.use(express.json());

app.listen(3010, () => {
  console.log(`Server listening on 3010`);
});

app.use('', allRoutes);
