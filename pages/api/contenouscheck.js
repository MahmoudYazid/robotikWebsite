
import { accountsModel } from "./schiema/AccountsSchima"
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"



export default  function handler(req,res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
    mongoose.connect(ConnectionString).then(()=>{
        accountsModel.find({password:req.query.password,_id:req.query.id}).then((result)=>{
            if(result.length > 0) {
                if(result[0].blocked==='yes'){
            return res.status(404).json({result:"n"})
          }else{
 return res.status(200).json({result:"e"})
          }
               
            }else{
                 return res.status(404).json({result:"n"})
            }

        }).catch((err)=>{
             return res.status(404).json({result:"n"})
        })
    
    

    


})
}
