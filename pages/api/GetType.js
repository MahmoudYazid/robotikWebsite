
import { accountsModel } from "./schiema/AccountsSchima"
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"


export default  function handler(req,res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   
    mongoose.connect(ConnectionString).then(()=>{
        accountsModel.find({_id:req.query.id}).then((result)=>{
            
        return res.json({type:result[0].type})

        })
    
    

    


})
}
