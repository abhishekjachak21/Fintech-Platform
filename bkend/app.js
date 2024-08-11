// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const transactionRoutes = require('./routes/transactionRoutes');
const { mongoURI, port } = require('./config');

const app = express();

app.use(bodyParser.json());
app.use(cors());

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/transactions', transactionRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
