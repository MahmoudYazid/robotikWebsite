
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"
import { requestssModel } from "./schiema/requestsSchima"




export default  function handler(req,res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    mongoose.connect(ConnectionString).then(()=>{
        requestssModel.find({
             
            clientid:req.query.clientid,
            requestservice:req.query.requestservice,
            answer:'not answered'

        }).then((findeddata)=>{
            if(findeddata.length>0){
                return res.json({'results':'n'})
            }else {
            if(req.query.requestservice) {
                  requestssModel.find({
            clientid:req.query.clientid,
            requestservice:req.query.requestservice,
            answer:'yes'

        }).then((answer)=>{
            if(answer.length > 0){
                const today = new Date()
                const enddate = new Date(answer[0].startdate)


                enddate.setDate(enddate.getDate() + parseInt(answer[0].enddate))

                if (enddate < today) {
                    requestssModel.findOneAndUpdate({ _id: answer[0]._id},{
                      
                        requestdate: Date(),
                        answer: 'not answered',
                        answercomment: 'not answered',
                        
              
                        startdate: 'not answered',
                       
                    })
                    return res.json({ 'results':'ok' })

                } 
                 
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
            startdate:'not answered',
            enddate: req.query.enddate,

            
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
