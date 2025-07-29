const Enquirymodel = require("../model/EnquiryModel.js")

exports.EnquiryInsert = async (req, res) => {
    const insert = await Enquirymodel.create(req.body);
    res.send("data inserted" + insert)
}

exports.EnquiryRead = async (req, res) => {
    const find = await Enquirymodel.find();
    if (!find) {
        res.status(400).send(enquiryList.find)
    }
    res.status(200).send(find)
}
exports.EnquiryUpdate = async (req, res) => {
    const update = await Enquirymodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).send(update)
}
exports.EnquiryDelete = async (req, res) => {
    const Del = await Enquirymodel.findByIdAndDelete(req.params.id);
    res.send("data deleted")
    res.status(200).send(Del)
}
