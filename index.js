// const express = require("express");
import express from "express";
import ProductController from "./src/controllers/product.controller.js";


const server = express();

//create instance of productcontroller
const productController = new ProductController();

server.use(express.static('src/views'));
// server.get("/", (req, res) => {
//     return res.send("welcome to inventory app");
// })

server.get("/", productController.getProducts );
server.listen(3400, () =>{
    console.log("server runnning on port 3400");
});