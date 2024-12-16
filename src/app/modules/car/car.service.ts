import { FilterQuery } from 'mongoose';
import { ICar } from './car.interface';
import Car from './car.model';

const createCar = async (car: ICar): Promise<ICar> => {
  const result = await Car.create(car);
  return result;
};

const getCars = async (filter: FilterQuery<ICar> = {}): Promise<ICar[]> => {
  return await Car.find(filter);
};

const getSingleCar = async (id: string): Promise<ICar | null> => {
  const result = await Car.findById(id);
  return result;
};

const updateCar = async (id: string, data: ICar): Promise<ICar | null> => {
  const result = await Car.findByIdAndUpdate(
    id,
    { ...data },
    { new: true, runValidators: true },
  );
  return result;
};

const deleteCar = async (id: string): Promise<ICar | null> => {
  const result = await Car.findByIdAndDelete(id);
  return result;
};

export const carService = {
  createCar,
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
};
