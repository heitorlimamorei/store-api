import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    name: String,
    description: String
}, {collection: "productInfo" })
export default reviewSchema