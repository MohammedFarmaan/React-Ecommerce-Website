const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB-Connection-Successful"))
  .catch((err) => {
    console.log("DB Not Connected");
  });
app.get("/", () => {
  res.json("hello");
});

app.get("/api/test", () => {
  console.log("Test is successful");
});

app.use(
  cors({
    origin: ["https://react-ecommerce-website-frontend.vercel.app"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(function (req, res, next) {
  if (req.originalUrl && req.originalUrl.split("/").pop() === "favicon.ico") {
    return res.sendStatus(204);
  }

  next();
});
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Backend server is running!");
});
