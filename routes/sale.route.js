import express from 'express';
import SaleController from '../controllers/sale.controller.js';
const SaleRouter = express.Router();
SaleRouter.post('/', SaleController.createSale)
SaleRouter.get('/', SaleController.getSales)
SaleRouter.get('/:id', SaleController.getSale)
SaleRouter.delete('/:id', SaleController.deleteSale)
SaleRouter.put('/', SaleController.updateSale)
export default SaleRouter