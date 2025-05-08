// const express = require("express");
import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import path from "path";
import expressLayouts from "express-ejs-layouts";


const server = express();

//set up view engine
server.set("view engine", "ejs");
server.set("views",path.join(path.resolve(), "src", "views"))

//create instance of productcontroller
const productController = new ProductController();

server.use(express.static('src/views'));
server.use(expressLayouts)
// server.get("/", (req, res) => {
//     return res.send("welcome to inventory app");
// })

server.get("/", productController.getProducts );
server.listen(3400, () =>{
    console.log("server runnning on port 3400");
});