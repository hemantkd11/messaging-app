const experss = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = experss();
require("dotenv").config();
// require("http").Server();

app.use(cors());
app.use(experss.json());

app.use("/api/auth", userRoutes);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("connection start");
  })
  .catch((err) => {
    console.log("error", err);
  });

const User = require("./models/userModel");

const server = app.listen(8080, () => {
  console.log("Server running on port 8080");
});
