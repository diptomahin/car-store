import { Request, Response } from 'express';
import { carService } from './car.service';

const createCar = async (req: Request, res: Response) => {
  try {
    const car = req.body;
    const result = await carService.createCar(car);

    res.status(201).json({
      message: 'Car created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: `Validation failed`,
      error: error,
      stack: error?.stack,
    });
  }
};

const getCars = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    let filter = {};

    if (searchTerm) {
      const regex = new RegExp(searchTerm as string, 'i');
      filter = {
        $or: [{ name: regex }, { brand: regex }, { category: regex }],
      };
    }

    const result = await carService.getCars(filter);

    if (result.length === 0) {
      return res.status(404).json({
        message: 'No Cars found matching the search criteria',
        status: false,
        data: [],
      });
    }

    res.status(200).json({
      message: 'Cars retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: 'Something went wrong when retrieving Car',
      error,
      stack: error?.stack,
    });
  }
};

const getSingleCar = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await carService.getSingleCar(productId);

    if (!result) {
      res.status(404).json({
        status: false,
        message: 'Car not found',
      });
      return;
    }

    res.status(200).json({
      message: 'Car retrieved successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Something went wrong when retrieving the Car',
      status: false,
      error,
      stack: error?.stack,
    });
  }
};

const updateCar = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const body = req.body;
    const result = await carService.updateCar(productId, body);

    if (!result) {
      res.status(404).json({
        message: 'Car not found',
        status: false,
      });
      return;
    }

    res.status(200).json({
      status: true,
      message: 'Car updated successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Something went wrong when updating the Car',
      status: false,
      error,
      stack: error?.stack,
    });
  }
};

const deleteCar = async (req: Request, res: Response) => {
  try {
    const productId = req.params.productId;
    const result = await carService.deleteCar(productId);

    if (!result) {
      res.status(404).json({
        message: 'Car not found',
        status: false,
      });
      return;
    }

    res.status(200).json({
      message: 'Car deleted successfully',
      status: true,
      data: {},
    });
  } catch (error: any) {
    res.status(500).json({
      message: 'Something went wrong when deleting the Car',
      status: false,
      error,
      stack: error?.stack,
    });
  }
};

export const CarController = {
  createCar,
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
