const mongoose = require("mongoose")
require("dotenv").config()


let CONNECTION_URI = process.env.CONNECTION_URI

function connectDb() {
    mongoose.connect(CONNECTION_URI)

    mongoose.connection.on("connected", () => {
        console.log("The database has been connected successfully")
    })

    mongoose.connection.on("error", (err) => {
        console.log(err)
    })
}