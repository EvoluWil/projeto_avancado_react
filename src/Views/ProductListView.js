import { api } from "../services/serviceApi.js";
import ProductsList from "../Components/ProductsList.js";
import { Channel } from "../services/eventService.js";
import { useEffect } from "react";

export function ProductListView(){
    
    useEffect(()=>{
        startData()
        Channel.removeListener("product:remove", remove)
    })

        Channel.on("product:remove", remove)
        
        async function remove(product_id){
            await api.delete(`/remove/${product_id}`);
            startData()
        };

        async function startData(){
            const Products = await api.get("/")
            let array = Products.data
            Channel.emit("products:list", array)
        }

    return(
        <div>
            <h1>Lista de Prodrutos</h1>
            <ProductsList/>
        </div>
    )
}