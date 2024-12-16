import { Types } from 'mongoose';

export type ICarOrder = {
  email: string;
  car: Types.ObjectId;
  quantity: number;
  totalPrice: number;
};
