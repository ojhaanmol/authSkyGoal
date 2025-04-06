import { EXPRESS_JSON_CONFIGURATIONS } from './constants';
import rootRouter from './routes';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({ origin: "https://vite-react-skygoal.vercel.app/", credentials: true }));
app.use(express.json( EXPRESS_JSON_CONFIGURATIONS ));

app.use( rootRouter );

export default app;