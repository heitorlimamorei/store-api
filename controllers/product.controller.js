import { logger } from '../index.js'
import ProductServices from '../services/product.service.js'
async function createProduct(req, res, next) {
  try{
    let product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
        throw new Error('name, description, value, stock e  supplier_id são obrigatorios')
    }
    res.send(await ProductServices.createProduct(product));
    logger.info(`POST /product ${JSON.stringify(product)}`)
  } catch(err){
    next(err)
  }
}
async function getProducts(req, res, next){
  try{
    res.send(await ProductServices.getProducts())
    logger.info(`GET /product all products `)
  } catch(err) {
    next(err)
  }
}
async function getProduct(req, res, next){
  const id  = req.params.id
  try{
    res.send(await ProductServices.getProduct(id))
    logger.info(`GET /product Id:${id} `)
  } catch(err) {
    next(err)
  }
}
async function deleteProduct(req, res, next){
  const id  = req.params.id
  try{
    await ProductServices.deleteProduct(id)
    res.end()
    logger.info(`DELETE /product Id:${id} `)
  } catch(err) {
    next(err)
  }
}
async function updateProduct(req, res, next){
  try{
    let product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId ||
      !product.productId
    ) {
        throw new Error('name, description, value, stock e product_id e supplier_id são obrigatorios')
    }
    product = await ProductServices.updateProduct(product)
    res.send(product);
    logger.info(`PUT /product ${JSON.stringify(product)}`)
  } catch(err){
    next(err)
  }
}
async function saveProductInfo(req, res, next) {
  try{
    let productInfo = req.body;
    if (
      !productInfo.productId
    ) {
        throw new Error('ProductId é obrigatório')
    }
    await ProductServices.saveProductInfo(productInfo)
    res.end()
    logger.info(`POST /product/info ${JSON.stringify(productInfo)}`)
  } catch(err){
    next(err)
  }
}
async function saveReview(req, res, next) {
  try{
    let ProductReview = req.body;
    if (
      !ProductReview.productId|| !ProductReview.review
    ) {
        throw new Error('ProductId e review são obrigatórios')
    }
    await ProductServices.saveReviwe(ProductReview.review, ProductReview.productId)
    res.end()
    logger.info(`POST /product/info/review ${JSON.stringify(ProductReview)}`)
  } catch(err){
    next(err)
  }
}
async function updateProductInfo(req, res, next) {
  try{
    let productInfo = req.body;
    if (
      !productInfo.productId
    ) {
        throw new Error('ProductId é obrigatório')
    }
    await ProductServices.updateProductInfo(productInfo)
    res.end()
    logger.info(`POST /product/info ${JSON.stringify(productInfo)}`)
  } catch(err){
    next(err)
  }
}
export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  saveProductInfo,
  updateProductInfo,
  saveReview
};
