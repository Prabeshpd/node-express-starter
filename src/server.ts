import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import * as bodyParser from 'body-parser';
import compression from 'compression';

const APP_PORT =
  (process.env.NODE_ENV === 'test' ? process.env.TEST_APP_PORT : process.env.APP_PORT) || process.env.PORT || '3000';
const APP_HOST = process.env.APP_HOST || '0.0.0.0';

const app = express();

app.set('port', APP_PORT);
app.set('host', APP_HOST);

app.use(compression());
app.use(helmet({ contentSecurityPolicy: true, crossOriginResourcePolicy: false, crossOriginEmbedderPolicy: false }));

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.listen(app.get('port'), app.get('host'), () => {
  console.log(`Server started at http://${app.get('host')}:${app.get('port')}/api`);
});
