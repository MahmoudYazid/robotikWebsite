
import { ConnectionString, productModel } from "./schiema/productSchima"
import mongoose, { model } from "mongoose"
import Cors from 'cors';

const corsOptions = {
    origin: ['http://185.211.4.42:3000/'],
};

const corsMiddleware = Cors(corsOptions);
export default function handler(req,res) {
    corsMiddleware(req, res, () => {
    mongoose.connect(ConnectionString).then(()=>{
        productModel.find({}).then((result)=>{
            
        return res.json(result)

        })
    
    

    


})
    })
}


