import express from "express"
import morgan from "morgan"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config();

import usersRoute from "./routes/usersroute.js"
import recordsRoute from "./routes/recordsroute.js"
import ordersRoute from "./routes/ordersroute.js"
//creating/initializing express server
const app = express()
const PORT = 4000;

//create mongoose connection
mongoose.connect(process.env.MONGO_URI, () => {
    console.log("DB connection established ! ")
})

// app.use all methods : get,post,patch, ..... any URL 
app.use(morgan("dev")) // external and custom middleware

//expres json middleware to parse any incoming json data
app.use(express.json())

//MVC 
// MODELS (data storage)
// VIEWS (UI ,frontend , presentational data)
// CONTROLLERS (request handlers , logic)

//Routes 
// "/users" GET POST PATCH DELETE
app.use("/users", usersRoute)

// "/records" GET POST PATCH DELETE
app.use("/records", recordsRoute)

// "/orders" GET POST PATCH DELETE
app.use("/orders", ordersRoute)

// Handling 404 page not found errorHandling
app.use((req, res) => {
    // res.json({success:false, message: "No route !!"})
    // })
    res.sendFile("./views/pagenotfound.html", { root: "." })
})

// Universal error handler middleware
app.use((err, req, res, next) => {
res.json({success:true, message:err.message})
})


//listening request on port 4000
app.listen(PORT, () => console.log("server is running on port :", PORT))