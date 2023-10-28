const mongoose = require("mongoose")

const toDoSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    activity: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date().toLocaleString()
    }
})



const appSchema = mongoose.model("Activities", toDoSchema)

module.exports = appSchema