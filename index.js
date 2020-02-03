const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT;

app.listen(port, () => {
  console.log('Server started successfully on port:', port);
});

app.use(cors());
app.use(bodyParser.json());

