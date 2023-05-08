import mongoose from "mongoose"
import { ConnectionString } from "./schiema/productSchima"
import { accountsModel } from "./schiema/AccountsSchima"
import Cors from 'cors';

const corsOptions = {
    origin: ['http://185.211.4.42:3000/'],
};
const corsMiddleware = Cors(corsOptions);
export default function handle(req,res){
    corsMiddleware(req, res, () => {
    mongoose.connect(ConnectionString).then(()=>{
        
        accountsModel.find({
            $or:[
                {email:req.query.email},{
            phone:req.query.phone}
            

            ]
            
        }).then((result)=>{
           console.log(result.length)
           if(result.length>0){
            res.json({result:'n'})
           }
            if(result.length<=0){
               
                const newaccount = new accountsModel({
                    name:req.query.name,
                    email:req.query.email,
                    phone:req.query.phone,
                    type:'client',
                    password:req.query.password,
                    card:"not existed",
                    blocked:'no'

                })
                newaccount.save().then(()=>{
                    res.json({result:'e'})
                })

                
                
             
                



            }else{
                    res.json({result:'n'})
            }
           

        }).catch((err) =>{
            res.json({result:'n'})
        })

    })
    })
}