import { Request, Response } from 'express';
import { CarOrderService } from './order.service';
import Order from './order.model';
import Car from '../car/car.model';

const createOrder = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    const car = await Car.findById(payload.car);
    if (!car) {
      return res.status(404).json({
        status: false,
        message: 'Car not found',
      });
    }

    if (car.quantity < payload.quantity) {
      return res.status(400).json({
        status: false,
        message: `Insufficient stock. Only ${car.quantity} units available.`,
      });
    }

    car.quantity -= payload.quantity;
    if (car.quantity === 0) {
      car.inStock = false;
    }
    await car.save();

    const result = await CarOrderService.createOrder(payload);

    res.status(201).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: error.message,
      stack: error?.stack,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await CarOrderService.getAllOrders();

    res.status(200).json({
      message: 'Orders retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong when retrieving orders',
      error: error.message,
      stack: error?.stack,
    });
  }
};

const getRevenue = async (req: Request, res: Response) => {
  try {
    const result = await Order.aggregate([
      {
        $lookup: {
          from: 'cars',
          localField: 'car',
          foreignField: '_id',
          as: 'carDetails',
        },
      },
      {
        $unwind: '$carDetails',
      },
      {
        $project: {
          totalPrice: { $multiply: ['$carDetails.price', '$quantity'] },
        },
      },
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
        },
      },
    ]);

    const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong',
      error: error.message,
      stack: error?.stack,
    });
  }
};

export const orderController = {
  createOrder,
  getRevenue,
  getAllOrders,
};
