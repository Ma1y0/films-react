const express = require("express")
const cors = require("cors")
const app = express()
const directorRoter = require("./routes/directorRouter")
const mongoose = require("mongoose")
require("dotenv").config()

//DB connect
mongoose.connect(process.env.DB_URI)
const db = mongoose.connection
db.on("error", error => console.log(error))
db.once("open", () => console.log("Connected to MongoDB"))

//Middleware
app.use(cors())
app.use(express.json())

//Router
app.use("/directors", directorRoter)

app.listen(process.env.PORT, () => {
    console.log(`Serer is listenig on port ${process.env.PORT}`)
})