import productInfoSchema from '../schemas/productInfo.schema.js'
import  connect  from './mongo.db.js'

async function createProductInfo(productInfo){ 
    try{
        productInfo.productId = parseInt(productInfo.productId)
        const mongoose = await connect()
        const ProductInfo =  mongoose.model("productInfo", productInfoSchema)
        productInfo = new ProductInfo(productInfo)
        await productInfo.save()
    }catch(err){
        throw err
    }
}
async function getProductInfo(productId){
    try{
        const mongoose = await connect()
        const ProductInfo =  mongoose.model("productInfo", productInfoSchema)
        const query =  ProductInfo.findOne({productId})
        return await query.exec()
    }catch(err){
        throw err
    }
}
async function deleteProductInfo(productId){
    try{
        const mongoose = await connect()
        const ProductInfo =  mongoose.model("productInfo", productInfoSchema)
        await ProductInfo.deleteOne({productId})
    }catch(err){
        throw err
    }
}
async function getProductsInfos(){
    try{
        const mongoose = await connect()
        const ProductInfo =  mongoose.model("productInfo", productInfoSchema)
        const query =  ProductInfo.find({})
        return await query.exec()
    }catch(err){
        throw err
    }
}
async function updateProductInfo(productInfo){
    try{
        const mongoose = await connect()
        const ProductInfo =  mongoose.model("productInfo", productInfoSchema)
        await ProductInfo.findOneAndUpdate({productId: productInfo.productId}, productInfo)
    }catch(err){
        throw err
    }
}
async function createProductReview(review, productId){
    try{
        const productInfo = await getProductInfo(productId)
        productInfo.review.push(review)
        await updateProductInfo(productInfo)
    } catch(err){
        throw err
    }
}
export default {
    createProductInfo,
    updateProductInfo,
    getProductInfo,
    createProductReview,
    getProductsInfos,
    deleteProductInfo
}