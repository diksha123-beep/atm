const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ATM")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.use('/api', require('./routes/accountRoute'));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});