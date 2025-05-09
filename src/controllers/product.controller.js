import path from "path";
import ProductModel from "../models/product.model.js";


export default class ProductController{
    getProducts(req, res){
        let products = ProductModel.get();
        console.log("products", products);
        console.log(path.resolve());
        res.render("index", {products : products});

        //  return    res.sendFile(path.join(path.resolve(), "src", "views", "products.html"));
         //view is served by controller
    }

    getAddForm(req, res){
        res.render("new-product", {errorMessage : null});
    }


    //job of controller is to receiv erequest and send back the response
    addNewProduct(req, res, next){
      
        //access data from form
        console.log("form", req.body);
        ProductModel.add(req.body);
        let products = ProductModel.get();
        console.log("products", products);
        res.render('index', {products : products});
    }

    getUpdateProductView(req, res,next){
        //1. if product exists then return view
        const { id } = req.params;
        const productFound = ProductModel.getById(id);
        if(productFound){
            res.render('update-product', {
                product : productFound,
                errorMessage : null
            });
        }
        //2. else return errors
        else{
            res.status(401).send('Product not found');
        }
    }

    postUpdateProduct(req, res){
        console.log("update", req.body);
        ProductModel.update(req.body);
        let products = ProductModel.get();
        console.log("products", products);
        res.render('index', {products : products});
    }
}

