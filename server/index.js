const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const mongoose = require("mongoose")
const routerPath = require("./router/Routerpath")

app.use(cors())
app.use(express.json())
app.use("/api/enquiry", routerPath)

const ConnectDb = async () => {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
        console.log("DATABASE IS CONECTED");
        app.listen(process.env.PORT || 3000, () => {
            console.log("server is running");

        })

    }).catch((error) => {
        console.error(error);

    })
}
ConnectDb()