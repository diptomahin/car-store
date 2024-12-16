import mongoose, { Schema } from 'mongoose';
import { ICarOrder } from './order.interface';

const CarOrderSchema = new Schema<ICarOrder>(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      match: [/\S+@\S+\.\S+/, 'Please provide a valid email address'], // Email validation
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      required: [true, 'car id is required'],
      ref: 'Car',
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [1, 'Quantity must be at least 1'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Total price is required'],
      min: [0, 'Total price must be a positive number'],
    },
  },
  { timestamps: true },
);

const Order = mongoose.model<ICarOrder>('Order', CarOrderSchema);

export default Order;
