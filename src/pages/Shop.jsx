import {useEffect, useContext, useState } from "react";
import {Link, useSearchParams, useLoaderData} from 'react-router-dom';
import { AppContext } from "../App";
// import { getProducts }from "../utilities/api";
import { useProductData } from "../hooks/useProductData";

// export function loader() {
//     return getProducts()
// }

export function loader() {
    return useProductData();
}


export default function Shop() {
    const [error, setError] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const typeFilter = searchParams.get('category');

    const products = useLoaderData();
    

    const displayShopItems = typeFilter
    ? products.filter(item => {
        return item.category.toLowerCase()
        .replaceAll(" ", "-")
        .replaceAll("'", "") === typeFilter
    })
    : products;

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if(value === null) {
                prevParams.delete(key);
            } else {
                prevParams.set(key, value);
            };
            return prevParams;
        });
    };

    const shopItems = displayShopItems.map(product => {
        

        const productName = product.title.toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]+/g, '')
        .replace(/--+/g, '-')


        return (
            <div className="product-card" key={product.id} id={product.id}>
                <Link 
                to={`${productName}/${product.id}`} 
                state={{
                    search: searchParams.toString(),
                    category: typeFilter
                }} 
                aria-label={`view details for ${product.name}`}>
                    <div className="test">
                        <div className="img-container">
                            <img src={`${product.image}`} alt={`image of ${product.name}`}></img>
                        </div>
                        <div className="testing">
                            <p>{product.title}</p>
                            <p>£{product.price.toFixed(2)}</p>
                        </div>
                    </div>
                    
                </Link>
            </div>
        )
    })
    
   
    if(error) {
        return <h1>There was an error: {error.message}</h1>
    }
    

    return (
        <>
            <div className="shop-container">
                <h2>Shop</h2>
                <button 
                onClick={() => handleFilterChange('category', 'mens-clothing')}
                className={`${typeFilter === 'mens-clothing' ? "selected" : ""}`}
                >Men's Clothing</button>
                <button 
                onClick={() => handleFilterChange('category', 'womens-clothing')}
                className={`${typeFilter === 'womens-clothing' ? "selected" : ""}`}
                >Women's Clothing</button>
                <button 
                onClick={() => handleFilterChange('category', 'jewelery')}
                className={`${typeFilter === 'jewelery' ? "selected" : ""}`}
                >Jewellery</button>
                <button 
                onClick={() => handleFilterChange('category', 'electronics')}
                className={`${typeFilter === 'electronics' ? "selected" : ""}`}
                >Electronics</button>
                {typeFilter && <button 
                onClick={() => handleFilterChange('category', null)}>Clear filter</button>}
                <div className="grid-container">
                    {shopItems}
                </div>
            </div>
            
            
        </>
        
    )
    
}
