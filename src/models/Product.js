import  mongoose  from "mongoose";


const ProductSchema = new mongoose.Schema({
    image:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    }
})
export default mongoose.model("Product", ProductSchema, "products")
