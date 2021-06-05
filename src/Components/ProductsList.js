import {useState } from "react";
import { Channel } from "../services/eventService";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export default function ProductList(){

    const [products, setProducts] = useState([]);
    
    Channel.on("products:list", setProducts)

    function remove(_id){
        Channel.emit("product:remove", _id)
    }

    
    return(
        <ul className="product-list">
            <TransitionGroup>
                {products.map((product)=>(
                    <CSSTransition key={product._id} timeout={300} classNames="product">
                        <li  className="product-list-item">
                            <button onClick={()=>remove(product._id)} >X</button>
                            <img src={product.image} alt={product.description} />
                            <div>{product.description}</div>
                            <div>{product.price}</div>
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </ul>
    )
}