
import { accountsModel } from "./schiema/AccountsSchima"
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"
import { requestssModel } from "./schiema/requestsSchima";
import { response } from "express";





export default function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');



    mongoose.connect(ConnectionString).then(() => {
        const servicename = req.query.servicename
        accountsModel.find({
            email: req.query.email,
            password: req.query.password
        }).then((FetchedData) => {
            
            if (FetchedData.length > 0) {

                if (FetchedData[0].blocked === 'yes') {
                    return res.json({ _id: 'b' })
                } else {
                    requestssModel.find({ clientid: FetchedData[0]._id, requestservice:servicename,answer:'yes'}).then((datafetched)=>{
                        const today=new Date()
                        const enddate = new Date(datafetched[0].startdate)

                        
                        enddate.setDate(enddate.getDate() + parseInt(datafetched[0].enddate))
                        console.log(enddate)
                        if (enddate <today){
                            return res.json({ result:'not allow' })

                        }else{
                            return res.json({ result: 'allow' })
                        }
                    
                       
                    }).catch((err)=>{
                        return res.json({ result: 'not allow' })
                    })
                    
                }

            } else {

                return res.json({ _id: 'n' })

            }
        }).catch((e) => {
            return res.json({ _id: 'n' })
        })



    })
}
