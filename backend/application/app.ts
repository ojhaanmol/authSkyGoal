import { EXPRESS_JSON_CONFIGURATIONS } from './constants';
import rootRouter from './routes';
import express from 'express'

const app = express();

app.use(express.json( EXPRESS_JSON_CONFIGURATIONS ));

app.use( rootRouter );

export default app;