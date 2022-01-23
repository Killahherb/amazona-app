import express from "express";
import data from './data.js';

const app = express();

app.get('/api/products/:id', (res,req) => {
    const product = data.products.find ( X => X.id === req.params.id);
    if (product){
        res.send(product);
    } else {
        res.statusCode(404).send({message:'Product not Found'});
    }
});

app.get('/api/products', (req,res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`);
});