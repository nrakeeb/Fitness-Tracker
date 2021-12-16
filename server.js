const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const apiRoutes = require("./routes/api-routes");
const htmlRoutes = require("./routes/html-routes");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/fitness-tracker",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

app.use(apiRoutes, htmlRoutes);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
