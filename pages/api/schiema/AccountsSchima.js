import mongoose, { model,Schema } from "mongoose"


const accountsSchima = new Schema({
    
    name:String,
    email:String,
    phone:String,
    type:String,
    password:String,
    card:String,
    blocked:String,

})

export const accountsModel= mongoose.models.accounts || model('accounts',accountsSchima)