import { ConnectionString } from "./schiema/productSchima"
import { accountsModel } from "./schiema/AccountsSchima"
import mongoose from "mongoose"
import Cors from 'cors';

const corsOptions = {
  origin: ['http://185.211.4.42:3000/'],
};
const corsMiddleware = Cors(corsOptions);

export default function handler(req,res) {
  corsMiddleware(req, res, () => {
    mongoose.connect(ConnectionString).then(()=>{
      accountsModel.find({
        email: req.query.email,
        password: req.query.password
      }).then((FetchedData)=>{
        if(FetchedData.length>0){
          
           if(FetchedData[0].blocked==='yes'){
            return res.json({_id:'b'})
          }else{
            return res.json({_id:FetchedData[0]._id})
          }
       
        }else{
         
          return res.json({_id:'n'})

        }
      }).catch((e)=>{
        return res.json({_id:'n'})
      })



    })
  })
}