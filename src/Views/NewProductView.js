import { useState } from "react";
import { api } from "../services/serviceApi.js"


export default function ProductView(){
    const [product, setProduct] = useState({
        image: "",
        description: "",
        price: 0,
      });

    function handleChange(event){
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    }
    function handleSubmit(event){
        event.preventDefault();
        if(product.description && product.price && product.image){
            const response = api.post("/new", {...product})
            setProduct( {image: "",
            description: "",
            price: 0})
            console.log(response)
        }

    }

    return (
        <div>
            <h1>Novo Prodruto</h1>
            <form onSubmit={handleSubmit} className="product-form">
                <label>
                    <span>Imagem</span>
                    <input onChange={handleChange} type="text" name="image" value={product.image} />
                </label>
                <label>
                    <span>Descrição</span>
                    <input onChange={handleChange} type="text" name="description" value={product.description}/>
                </label>
                <label>
                    <span>Preço</span>
                    <input onChange={handleChange} type="text" name="price" value={!product.price ? "" : product.price}/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}