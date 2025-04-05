import userRoute from './routes/user';
import express from 'express'

const app = express();

app.use(express.json({
    limit: '10mb',
    type: ['application/json', 'application/vnd.api+json']
}));

app.use('/user', userRoute);

export default app;