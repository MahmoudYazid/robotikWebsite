
import { ConnectionString, productModel } from "./schiema/productSchima"
import mongoose, { model } from "mongoose"


export default  function handler(req,res) {
    
    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    mongoose.connect(ConnectionString).then(()=>{
        productModel.find({}).then((result)=>{
            
        return res.json(result)

        })
    
    

    


})
}


