const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const corsOptions = {
  origin: '*',
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const router = require('./router');

dotenv.config();

const app = express();
app.use(cors(corsOptions)); // Use this after the variable declaration
app.use(express.json({ limit: '50mb' }));
//app.use(cors());
app.use(morgan('tiny'));
app.use(router);

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log('starting on port 8080');
  app.listen(8080);
});
