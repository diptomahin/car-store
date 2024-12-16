import { ICarOrder } from './order.interface';
import Order from './order.model';

const createOrder = async (payload: ICarOrder): Promise<ICarOrder> => {
  const result = await Order.create(payload);
  return result;
};
const getAllOrders = async (): Promise<ICarOrder[]> => {
  const result = await Order.find();
  return result;
};

export const CarOrderService = {
  createOrder,
  getAllOrders,
};
