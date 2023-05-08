
import { accountsModel } from "./schiema/AccountsSchima"
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"

export default function handler(req,res) {

    mongoose.connect(ConnectionString).then(()=>{
        accountsModel.find({_id:req.query.id}).then((result)=>{
            
        return res.json({type:result[0].type})

        })
    
    

    


})
 
}
