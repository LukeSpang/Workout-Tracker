const express = require("express");
const path = require("path");

module.exports = function (app){
    app.get("/", (req, rest)=>{
        rest.sendFile(path.join(__dirname, "../public/index.html"));
    })
}