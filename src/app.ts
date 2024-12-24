import express, { Application } from 'express';
import cors from 'cors';
import router from './router/router';
import notFound from './app/middleware/notFound';
import globalError from './app/middleware/globalError';


const app:Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api', router)


app.get('/', (req, res) => {
  res.send('Api is Running For Gym Management System');
});
app.use(globalError);
//not found api
app.use(notFound);

export default app;