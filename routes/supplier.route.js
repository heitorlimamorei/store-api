import express from 'express';
import SupplierController from '../controllers/supplier.controller.js';
const SupplierRouter = express.Router();;

SupplierRouter.post('/', SupplierController.createSupplier)
SupplierRouter.get('/', SupplierController.getSuppliers)
SupplierRouter.get('/:id', SupplierController.getSupplier)
SupplierRouter.delete('/:id', SupplierController.deleteSupplier)
SupplierRouter.put('/', SupplierController.updateSupplier)

export default SupplierRouter