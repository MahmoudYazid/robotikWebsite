
import { ConnectionString } from "./schiema/productSchima"
import mongoose, { model } from "mongoose"
import { requestssModel } from "./schiema/requestsSchima"
import Cors from 'cors';

const corsOptions = {
    origin: ['http://185.211.4.42:3000/'],
};
const corsMiddleware = Cors(corsOptions);
export default function handler(req,res) {
    corsMiddleware(req, res, () => {
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
    }) 
}


