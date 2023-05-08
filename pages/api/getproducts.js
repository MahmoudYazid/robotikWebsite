
import { ConnectionString, productModel } from "./schiema/productSchima"
import mongoose, { model } from "mongoose"

export default function handler(req,res) {

    mongoose.connect(ConnectionString).then(()=>{
        productModel.find({}).then((result)=>{
            
        return res.json(result)

        })
    
    

    


})
 
}


