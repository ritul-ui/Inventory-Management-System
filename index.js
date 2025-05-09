// const express = require("express");
import express from "express";
import ProductController from "./src/controllers/product.controller.js";
import path from "path";
import expressLayouts from "express-ejs-layouts";
// import  validationMiddleware  from "./src/middlewares/validation.middleware.js"; // we can import default export with any name
import validateRequest from "./src/middlewares/validation.middleware.js"; 


const server = express();

//parse form data
server.use(express.urlencoded({extended : true}));

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
server.get("/new", productController.getAddForm);
server.post('/', validateRequest, productController.addNewProduct );
server.get("/update-product/:id", productController.getUpdateProductView);
server.post("/update-product", productController.postUpdateProduct);



server.listen(3400, () =>{
    console.log("server runnning on port 3400");
});