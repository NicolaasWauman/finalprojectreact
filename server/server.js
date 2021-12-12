const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const app = express();

dotenv.config();
// CONNECT TO MONGODB

const mongoUri = `mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}?retryWrites=true&w=majority`;

// const mongoUri =
//   "mongodb+srv://Nicolaas:0ebPU1eJrv7dOewS@learnreactcluster.zvjx1.mongodb.net/authApp?retryWrites=true&w=majority";

mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  () => {
    console.log("db connected");
  }
);

// MIDDLEWARE

app.use(bodyParser.json());
app.use(cookieParser());

// SERVER PORT
const port = process.env.PORT || 8001;

app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
