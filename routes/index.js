const express = require("express")
const router = express.Router()
const appSchema = require("../model/appModel")


router.get("/", async (req, res) => {
    const files = await appSchema.find()
 
    res.render("index", {file: files})
})

router.post("/create", async (req, res) => {
    const toDo = req.body.todo

    const value = new appSchema({ toDo: toDo })

    try {
        await value.save()
        console.log("The task saved successfully")
        res.redirect("/")
    } catch (error) {
        console.log(error || res.status(500))
    }
})


router.delete("/delete/:_id", (req, res) => {
    const id = req.params._id

    appSchema.deleteOne(id)

    try {
        res.redirect("/")
        console.log("Deleted")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router