const mongoose = require("mongoose");
require("dotenv").config();

const DB_CONNECT = "mongodb+srv://projectsell:imtiyaz@projectsell.0vkcwzq.mongodb.net/?retryWrites=true&w=majority&appName=ProjectSell";

mongoose
  .connect(DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
