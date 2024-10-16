var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello all! Hope you have fun and learn something new! This is our CLI attempt.');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
