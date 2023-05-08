import { ConnectionString } from "./schiema/productSchima"
import { accountsModel } from "./schiema/AccountsSchima"
import mongoose from "mongoose"



export default  function handler(req,res) {

  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

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
 
}