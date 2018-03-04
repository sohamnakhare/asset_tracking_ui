const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./build'));

var host = process.env.OPENSHIFT_NODEJS_IP || process.env.IP || 'localhost';
var port = process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3000;

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

app.listen(port,host,function () {
  console.log( "Listening on " + host + ", port " + port )
});
