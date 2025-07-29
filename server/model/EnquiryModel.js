const mongoose = require("mongoose")

const EnquirySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
})
const Enquirymodel = mongoose.model("Enquiry", EnquirySchema)
module.exports = Enquirymodel