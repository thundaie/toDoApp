const express = require("express")
const app = express()
require("dotenv").config()
const toDo = require("./routes/index")
const { connectDb } = require("./connection/connect")

const PORT = process.env.PORT

app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use("/todo", toDo) 

// connectDb()

app.get("/", (req, res) => {
    res.send("Welcome to the to do app")
})


app.use(function (err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.json({ error: err.message });
});


app.listen(PORT)
