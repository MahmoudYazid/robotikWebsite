import mongoose, { model,Schema } from "mongoose"


const requestSchima = new Schema({
    
    affiliateid:String,
    clientid:String,
    requestservice:String,
    cost:String,
    profit:String,
    requestdate:String,
    answer:String,
    answercomment:String,
    AffiliateNationalCard:String,
    startdate:String,
    enddate:String,

})

export const requestssModel= mongoose.models.req || model('req',requestSchima,'req')