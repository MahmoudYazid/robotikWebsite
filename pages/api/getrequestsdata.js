
import { ConnectionString } from "./schiema/productSchima"
import mongoose, { model } from "mongoose"
import { requestssModel } from "./schiema/requestsSchima"


export default  function handler(req,res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
   
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


