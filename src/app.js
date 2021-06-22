import express, { json } from 'express';
import morgan from 'morgan';

//importing router
import projectRouter from './routes/products';
import taskRouter from './routes/sales';


const app = express()

//middlewares
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRouter);
app.use('/api/task', taskRouter);

export default app;