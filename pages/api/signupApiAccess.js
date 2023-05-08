import mongoose from "mongoose"
import { ConnectionString } from "./schiema/productSchima"
import { accountsModel } from "./schiema/AccountsSchima"



export default  function handle(req,res){

    res.setHeader("Access-Control-Allow-Origin", "*");

 

    
    mongoose.connect(ConnectionString).then(()=>{
        
        accountsModel.find({
            $or:[
                {email:req.query.email},{
            phone:req.query.phone}
            

            ]
            
        }).then((result)=>{
           console.log(result.length)
           if(result.length>0){
            return res.json({result:'n'})
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
                    return res.json({result:'e'})
                })

                
                
             
                



            }else{
                    return res.json({result:'n'})
            }
           

        }).catch((err) =>{
            return res.json({result:'n'})
        })

    })
}
