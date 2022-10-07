import ProductModel from '../models/Product.model.js'
async function insertProduct(product) {
  try {
    return await ProductModel.create(product)
  } catch (err) {
    throw  Error
  }
}
async function getProducts() {
  try {
    return await ProductModel.findAll();
  }catch(err) {
    throw err
  }
}
async function getProduct(id){
  try{
    return await ProductModel.findByPk(id, {raw: true})
  }catch(err){
    throw err
  }
}
async function updateProduct(product) {
  try {
     await ProductModel.update(product, {
      where:{
        productId: product.productId
      }
     })
     return await getProduct(product.productId)
  } catch(err){
    throw err
  }
}
async function deleteProduct(id){
  try{
    await ProductModel.destroy({
      where: {
        productId: id
      }
    })
  }catch(err){
    throw err
  }
}

export default {
  insertProduct,
  getProducts,
  getProduct,
  deleteProduct,
  updateProduct
};
