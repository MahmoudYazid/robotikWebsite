
import { ConnectionString } from "./schiema/productSchima"
import mongoose from "mongoose"

import { codesModel } from "./schiema/codesSchima";




export default function handler(req, res) {

    res.setHeader("Access-Control-Allow-Origin", "*");

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    mongoose.connect(ConnectionString).then(() => {
        const randomNumber = Math.floor(Math.random() * 200000000) + 1000000000;
        const newcode =new codesModel({
            code:String(randomNumber)
        })
        newcode.save().then(() => {
            res.send(200)
        })








    })
}
