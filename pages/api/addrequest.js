
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"
import { requestssModel } from "./schiema/requestsSchima"

export default function handler(req,res) {


    mongoose.connect(ConnectionString).then(()=>{
        requestssModel.find({
              affiliateid:req.query.affiliateid,
            clientid:req.query.clientid,
            requestservice:req.query.requestservice,
            cost:req.query.cost,
            answer:'not answered'

        }).then((findeddata)=>{
            if(findeddata.length>0){
                return res.json({'results':'n'})
            }else {
            if(req.query.requestservice) {
                  requestssModel.find({
              affiliateid:req.query.affiliateid,
            clientid:req.query.clientid,
            requestservice:req.query.requestservice,
            cost:req.query.cost,
            answer:'yes'

        }).then((answer)=>{
            if(answer.length > 0){
                 return res.json({'results':'n'})
            }else{
            const newreq=new requestssModel({
            affiliateid:req.query.affiliateid,
            clientid:req.query.clientid,
            requestservice:req.query.requestservice,
            cost:req.query.cost,
            profit:req.query.profit,
            requestdate:Date(),
            answer:'not answered',
            answercomment:'not answered',
            AffiliateNationalCard:req.query.affiliatenationalcard,
            profit:req.query.profit,
            startdate: 'not accepted yet',
            enddate: 'not accepted yet',

            
        })
            newreq.save()
            return res.json({'results':'ok'})
            }

        })


            } 
     

            }

        })

    

    


})
 
}
