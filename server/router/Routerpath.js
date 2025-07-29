const express = require("express")
const router = express.Router()
const EnquiryControll = require("../controlls/EnquaryControll")

router.post("/", EnquiryControll.EnquiryInsert)
router.get("/", EnquiryControll.EnquiryRead)
router.put("/:id", EnquiryControll.EnquiryUpdate)
router.delete("/:id", EnquiryControll.EnquiryDelete)

module.exports = router