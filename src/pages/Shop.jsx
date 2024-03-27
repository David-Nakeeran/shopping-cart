import { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

export default function Shop() {
    const [products, setProducts] = useState([]);

    async function getProducts() {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                throw Error(response.status)
            }
            const data = await response.json();
            setProducts(data);
        } catch(error) {
            console.error(error)
            return []
        }
        
    }

    useEffect(() => {
        const abortController = new AbortController();
        getProducts()
        return () => abortController.abort()
    }, []);

    const shopItems = products.map(product => {
        

        const productName = product.title.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]+/g, '')
        .replace(/--+/g, '-')
        console.log(productName);


        return (
                <div className="product-card" key={product.id} id={product.id}>
                <Link to={`/shop/${productName}/${product.id}`} aria-label={`view details for ${product.name}`}>
                    <div>
                        <img src={`${product.image}`} alt={`image of ${product.name}`}></img>
                    </div>
                    <div>
                        <p>{product.title}</p>
                        <p>£{product.price}</p>
                    </div>
                </Link>
            </div>
        )
    })

    return (
        <>
            <h1>Shop page</h1>
            {shopItems}
        </>
        
    )
}