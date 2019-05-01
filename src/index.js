import express from 'express';
import routes from './routes/employee-routes';
import bodyParser from 'body-parser';
import mongoose from 'mongoose'


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/employees', {
  useNewUrlParser: true
});

app.set('json spaces', 2);
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());
routes(app);

app.set('port', process.env.PORT || 5000);

const server = app.listen(app.get('port'), function(err) {
  if (err) {
    console.error(err);
  }
  console.info('API Register Employees listening on port: %d', server.address()
    .port);
});

export default app;
