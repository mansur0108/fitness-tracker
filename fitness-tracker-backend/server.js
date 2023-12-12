const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 5000;

// MongoDB connection
const mongoDB = "mongodb://localhost:27017/fitnessTrackerDb";
mongoose.connect(mongoDB);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function () {
  console.log("Connected successfully to MongoDB");
});

// Define a simple route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
