import express from "express"
import { productManager } from "./productManager.js"


const app = express ();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const prodMan = new productManager('./products.json')

app.get('/', (req, res) => {
    res.send('Hola Usuario');
  });

  app.get('/products', async (req,res) =>{
    try{
        const products = await productManagerInstance.getProducts();
        const limit = req.query.limit ? parseInt(req.query.limit) : null;
        const response = limit ? products.slice(0, limit) : products;
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: 'Error' });
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
      const productId = parseInt(req.params.pid);
      const product = await productManagerInstance.getProductById(productId);
  
      if (!product) {
        return res.status(404).json({ error: 'not found' });
      }
  
      res.json(product);
    } catch (error) {
      res.status(500).json({ error: 'Error' });
    }
});

app.listen(8080, () => {
  console.log(`Servidor Express escuchando en el puerto 8080`);
});