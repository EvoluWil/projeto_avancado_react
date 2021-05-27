import Product from "../models/Product.js";


export default async function store(req, res){
    let {image, description, price} = req.body;
    
    let newProduct = await Product.findOne({image, description, price});     

    if(!newProduct){
        newProduct = await Product.create({image, description, price});     
    }

    return res.json(newProduct);
}
