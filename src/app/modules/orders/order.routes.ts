import express from 'express';
import { orderController } from './order.controller';

const orderRouter = express.Router();

orderRouter.post('/', orderController.createOrder);

orderRouter.get('/revenue', orderController.getRevenue);

orderRouter.get('/', orderController.getAllOrders);

export default orderRouter;
