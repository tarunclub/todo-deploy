const express = require('express');
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const todoRoutes = require('./routes/todoRoutes.js');
app.use('/api/v1/', todoRoutes);

app.listen(PORT, () => {
  console.log(`Example app listening at port ${PORT}`);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });
