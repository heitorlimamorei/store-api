import productRepository from "../repositories/product.repository.js";
import productInfoRepository from "../repositories/productInfo.repository.js";
import SupplierRepository from "../repositories/supplier.repository.js";

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplieId)) {
    return await productRepository.insertProduct(product);
  }
  throw new Error("Supplier_id not found");
}
async function getProducts() {
  return await productRepository.getProducts();
}
async function getProduct(id) {
  let product =  await productRepository.getProduct(id);
  product.info = await productInfoRepository.getProductInfo(parseInt(id));
  return product;
}
async function deleteProduct(id) {
  if(await productRepository.getProduct(id)) {
    await productRepository.deleteProduct(id);
  } else {
    throw new Error("Product not found");
  }
}
async function updateProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await productRepository.updateProduct(product);
  }
  throw new Error("Supplier_id not found");
}
async function saveProductInfo(productInfo){
  return await productInfoRepository.createProductInfo(productInfo);
}
async function saveReviwe(review, productId){
  return await productInfoRepository.createProductReview(review, productId);
}
async function updateProductInfo(productInfo){
  return await productInfoRepository.updateProductInfo(productInfo);
}
export default {
  createProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct,
  saveProductInfo,
  updateProductInfo,
  saveReviwe
};
