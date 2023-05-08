import mongoose, { model ,Schema } from "mongoose";
export const ConnectionString='mongodb+srv://abuelyazidsoftware:mnimai21yo@clone.7pm38gz.mongodb.net/clone?retryWrites=true&w=majority'
const productSchima = new Schema({
    price:String,
    ProductName:String,
    Description:String,
    Link:String

})


export const productModel= mongoose.models.products || model('products',productSchima)
