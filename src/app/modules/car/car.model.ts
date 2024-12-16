import mongoose, { Schema } from 'mongoose';
import { ICar } from './car.interface';

const carSchema = new Schema<ICar>(
  {
    brand: {
      type: String,
      required: [true, 'Car brand is required'],
    },
    model: {
      type: String,
      required: [true, 'Car model is required'],
    },
    year: {
      type: Number,
      required: [true, 'Car year of manufacture is required'],
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number'],
    },
    category: {
      type: String,
      enum: ['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'],
      required: [true, 'Category is required'],
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    quantity: {
      type: Number,
      required: [true, 'Quantity is required'],
      min: [0, 'Quantity must be a non-negative number'],
    },
    inStock: {
      type: Boolean,
      required: [true, 'InStock status is required'],
    },
  },
  { timestamps: true },
);

const Car = mongoose.model<ICar>('Car', carSchema);

export default Car;
