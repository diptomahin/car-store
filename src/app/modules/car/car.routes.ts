import express from 'express';
import { CarController } from './car.contoller';

const carRouter = express.Router();

carRouter.post('/', CarController.createCar);
carRouter.get('/', CarController.getCars);
carRouter.get('/:productId', CarController.getSingleCar);
carRouter.put('/:productId', CarController.updateCar);
carRouter.delete('/:productId', CarController.deleteCar);

export default carRouter;
