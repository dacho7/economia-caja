import express, { json, urlencoded } from 'express';
import morgan from 'morgan';
const bodyParser = require('body-parser');


const app = express()

//middlewares
app.use(morgan('dev'));
app.use(json());
app.use(bodyParser.urlencoded({extended: false}))

//importing router
import projectRouter from './routes/products';
import taskRouter from './routes/sales';


//routes
app.use('/api/projects', projectRouter);
app.use('/api/task', taskRouter);

export default app;