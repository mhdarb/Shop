const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const cartRoute = require("./routes/cart");
const productRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const authRoute = require("./routes/auth");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

app.use(cors());
app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout",stripeRoute)
app.use("/api/products",productRoute)


mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("DB Connection Successfull"))
.catch((err) =>{
    console.log(err);
})
app.listen(process.env.PORT || 4000, ()=>{
    console.log("Backend Server is running!")
})
