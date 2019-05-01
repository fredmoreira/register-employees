const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.set('json spaces', 2);
app.use(bodyParser.json());
app.use('/', routes);

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), function(err) {
  if (err) {
    console.error(err);
  }
  console.info('API Register Employees listening on port: %d', server.address()
    .port);
});

module.exports = app;
