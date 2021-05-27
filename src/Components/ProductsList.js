import { useEffect, useRef, useState } from "react";
import { Channel } from "../services/eventService";


export default function ProductList(){

    const [products, setProducts] = useState([]);
    
    Channel.on("products:list", setProducts)

    function remove(_id){
        Channel.emit("product:remove", _id)
    }

    
    return(
        <ul className="product-list">
            {products.map((product)=>(
                <li key={product._id} className="product-list-item">
                    <button onClick={remove(product._id)} >X</button>
                    <img src={product.image} alt={product.description} />
                    <div>{product.description}</div>
                    <div>{product.price}</div>
                </li>
            ))}
        </ul>
    )
}