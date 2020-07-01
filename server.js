const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/webapp'));
app.use(express.json());

app.listen(port);
console.log('Listening to port ' + port)