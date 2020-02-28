/* eslint-disable no-magic-numbers */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/employee-routes';

const app = express();

app.set('json spaces', 2);
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(bodyParser.json());

routes(app);

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), () =>
  console.info('API Register Employees listening on port: %d', app.get('port')),
);

export default app;
