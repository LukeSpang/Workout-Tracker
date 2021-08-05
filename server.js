const express = require("express");
// const logger = require("morgan");
const mongoose = require("mongoose");
const router = require("./routes/api.js")

const PORT = process.env.PORT || 3333;

const app = express();

// app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let db = mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/fitnesstrackerDB",{
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true,
    }
);
//////routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"))

app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});

module.exports = db;

