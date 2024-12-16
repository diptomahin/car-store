import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import carRouter from './app/modules/car/car.routes';
import orderRouter from './app/modules/orders/order.routes';

const app: Application = express();

//parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    message: 'Welcome to the Car Store API!',
    status: true,
  });
});

app.use('/api/cars', carRouter);
app.use('/api/orders', orderRouter);

export default app;
