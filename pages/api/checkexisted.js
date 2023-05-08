
import { accountsModel } from "./schiema/AccountsSchima"
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"
import Cors from 'cors';

const corsOptions = {
    origin: ['http://185.211.4.42:3000/'],
};

const corsMiddleware = Cors(corsOptions);

export default function handler(req,res) {

    corsMiddleware(req, res, () => {
    mongoose.connect(ConnectionString).then(()=>{
        accountsModel.find({_id:req.query.id}).then((result)=>{
            if(result.length > 0) {
                return res.json({result:"e"})
            }else{
                 return res.json({result:"n"})
            }

        }).catch((err)=>{
             return res.json({result:"n"})
        })
    
    

    


})
    }) 
}
