const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const router = require("./routes")

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useFindAndModify: false
});

app.use(router);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});