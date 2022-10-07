import mongoose from "mongoose";
import reviewSchema from './review.schema.js'
const productInfoSchema = new mongoose.Schema(
{
    productId: Number,
    category: String,
    height: String, 
    width: String,
    depth: String,
    reviews: [reviewSchema]
}, {collection: "productInfo" })
export default productInfoSchema