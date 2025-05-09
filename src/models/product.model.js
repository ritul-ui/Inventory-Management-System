// model is nothing but class with properties
export default class ProductModel{
    constructor(_id, _name,_desc, _price, _imageUrl){
        this.id = _id;
        this.name = _name;
        this.desc = _desc;
        this.price = _price;
        this.imageUrl = _imageUrl;
    }
    static get(){
        return products;
    }

    static update(productObj){
       const index =  products.findIndex(p => p.id == productObj.id);
       products[index] = productObj;
    }
    static add(productObj){
        let newProduct = new ProductModel(products.length + 1, productObj.name, productObj.desc, productObj.price, productObj.imageUrl);
        products.push(newProduct)
    }

    static getById(id){
      return   products.find(p=> p.id == id);
    }


    //static method don't need to be instantiated
}


//
// [
//     ProductModel {
//       id: 1,
//       name: 'Product 1',
//       desc: 'Description for Product 1',
//       price: 19.99,
//       imageUrl: 'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg'
//     },
// ]
var products = [
    new ProductModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
    ),
    new ProductModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
  ]