
import { ConnectionString } from "./schiema/productSchima"
import mongoose, { model } from "mongoose"
import { requestssModel } from "./schiema/requestsSchima"

export default function handler(req,res) {

    mongoose.connect(ConnectionString).then(()=>{
        requestssModel.find({
            $or:[
                { affiliateid: req.query.id },{clientid:req.query.id}
            ]
            
            }).then((result)=>{
            if(result.length > 0){
            return res.json(result)
            }else{
                return res.json({result:'no data'})
            }
    

        })
    
    

    


})
 
}


