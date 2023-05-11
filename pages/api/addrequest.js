
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"
import { requestssModel } from "./schiema/requestsSchima"
import { codesModel } from "./schiema/codesSchima";




export default function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    mongoose.connect(ConnectionString).then(() => {
        codesModel.find({ code: req.query.code }).then((coderesult) => {
            if (coderesult.length > 0) {
                requestssModel.find({
                    clientid: req.query.clientid,
                    requestservice: req.query.requestservice,
                }).then((findrequest)=>{
                if (findrequest.length > 0) {
                   
                    
                    requestssModel.findOneAndRemove({ _id: findrequest[0]._id }).then(()=>{
                        const newreq=new requestssModel({
                            clientid: req.query.clientid,
                            requestservice: req.query.requestservice,
                            cost: req.query.cost,
                            profit: req.query.profit,
                            requestdate: Date(),
                            answer: 'yes',
                            startdate: Date(),
                            enddate: req.query.enddate,


                        })
                        newreq.save().then(()=>{
                            codesModel.findOneAndRemove({ _id: coderesult[0]._id }).then(()=>{
                                res.send(200)

                            })
          
                        })

                    })

                    }else{
                    const newreq = new requestssModel({
                        clientid: req.query.clientid,
                        requestservice: req.query.requestservice,
                        cost: req.query.cost,
                        profit: req.query.profit,
                        requestdate: Date(),
                        answer: 'yes',
                        startdate: Date(),
                        enddate: req.query.enddate,


                    })
                    newreq.save().then(() => {
                        codesModel.findOneAndRemove({ _id: coderesult[0]._id }).then(() => {
                            res.send(200)

                        })
                     
                    })

                    }
                })

            }
         

        })







    })
}
