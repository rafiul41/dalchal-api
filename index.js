const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const util = require('./helpers/util');

const app = express();
const port = process.env.PORT;
const normalizedPath = path.join(__dirname + `/routes`);
const routes = util.getFileExportsAsArray(normalizedPath);

app.listen(port, () => {
  console.log('Server started successfully on port:', port);
});

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

// Connecting to database
require('./configs/mongoose.connect')();
