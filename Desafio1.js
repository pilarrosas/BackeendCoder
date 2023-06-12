class productsManager {
  priceGain = 0.50
    constructor() {
        this.products = []
    }
   addProducts (name, price, desc, thumbnail, stock) {
     const products = {
        id: this.getMaxId() + 1,
        name,
        price: price + this.priceGain,
        desc,
        thumbnail,
        stock: []
     }
     this.products.push(products)
   }
   getMaxId() {
    let maxId = 0
    this.products.map((prod) =>{
      if(prod.id > maxId) maxId = prod.id
    })
    return maxId
   }
   getProducts() {
    return this.products
   }

   addProducts(idName, idProduct){
    const product = this.getProducts(idProduct)
    if(product) {
      if (!product.name.includes(idName)) product.stock.push(idName)
    } else {
      console.log("This product do not exist!")
    }
   }

   getProductById(idProduct) {
    return this.products.find(prod => prod.id === idProduct)
   }

   newProduct(idProduct, newProduct, newStock) {
    const product = this.getProducts(idProduct)
     if (product) {
      const newProd = {
        ...product,
        id: this.getMaxId() + 1,
        name: newProduct,
        stock: newStock,
      }
      this.products.push(newProd)
      } else {
        console.log("This product do not exist!")
      }
   }
} 

const productManager = new productsManager()

productManager.addProducts("New Snickers", 199, "black snickers")
productManager.addProducts("Red Snickers", 170, "red snickers")
productManager.addProducts("Blue Snickers", 150, "blue snickers")
console.log(productManager.getProducts())