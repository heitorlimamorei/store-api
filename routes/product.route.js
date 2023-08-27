import express from 'express';
import ProductController from '../controllers/product.controller.js';
const ProductRouter = express.Router();

ProductRouter.post('/', ProductController.createProduct)
ProductRouter.post('/info', ProductController.saveProductInfo)
ProductRouter.post('/info/review', ProductController.saveReview)
ProductRouter.get('/', ProductController.getProducts)
ProductRouter.get('/:id', ProductController.getProduct)
ProductRouter.delete('/:id', ProductController.deleteProduct)
ProductRouter.put('/', ProductController.updateProduct)
ProductRouter.put('/info', ProductController.updateProductInfo)
export default ProductRouter