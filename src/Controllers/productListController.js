import Product from "../models/Product.js";


export default async function index(req, res){
    const productsList = await Product.find();
    return res.json(productsList);
}
export async function destroy(req, res){
        let _id = req.params.id;
        Product.findByIdAndDelete(_id,  err=>{
            if(!err){
                res.json({message: `sucesso`});
            }else{
                res.status(500).end();
            } 
        })
}