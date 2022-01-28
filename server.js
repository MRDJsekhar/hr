const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/', routes);

//const PORT = 5000;

mongoose.connect(process.env.CONNECT, { useNewUrlParser: true }, () => console.log('connection success'));

app.listen(process.env.PORT, () => console.log(`server running on port ${process.env.PORT}`));
