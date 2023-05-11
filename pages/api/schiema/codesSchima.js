import mongoose, { model, Schema } from "mongoose"


const codesSchima = new Schema({
    code: String,
})

export const codesModel = mongoose.models.direct_paid_code || model('direct_paid_code', codesSchima,'direct_paid_code')
