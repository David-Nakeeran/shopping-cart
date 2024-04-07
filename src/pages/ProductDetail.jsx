import { Link, useParams, useLocation, useLoaderData } from "react-router-dom";
import{useEffect, useContext, useState} from 'react';
import { AppContext } from "../App";
import Modal from "../components/Modal.jsx";
import { useProductData } from "../hooks/useProductData.js";

export function loader({params}) {
    return useProductData(params.id);
}


export default function ProductDetail() {
    const {setCart, cart, loading, setLoading, isModalOpen, setIsModalOpen} = useContext(AppContext);
    
    const product = useLoaderData()
    const location = useLocation();
    

    function addToCart() {
        setCart(prevState => {
            if(prevState === null) {
                return [{...product, quantity: 1}]
            } else {
                const isProductInCart = prevState.some(item => item.id === product.id)

                if(isProductInCart) {
                    return prevState
                
                } else {
                    console.log(prevState);
                    return [...prevState,
                        {...product, quantity: 1}
                    ];
                };
            }
            
        });
    };


    const search = location.state?.search || '';
    const category = location.state?.category || 'all';

    return (
        <>
            <Link to={`../..?${search}`}
                relative="path"
                className="back-link"
                >{`...Back to ${category.replace('-', ' ')}  products`}</Link>
            <div className="product-detail-container" key={product.id}>
                <h2 className="product-title">{product.title}</h2>
                <div className="product-detail-img-container">
                    <img src={`${product.image}`} alt={`image of ${product.name}`}></img>
                </div>
                <div>
                    <p>{product.description}</p>
                    <p>£{product.price && product.price.toFixed(2)}</p>
                </div>
                <button 
                className="add-to-cart"
                onClick={() => {
                    addToCart() 
                    setIsModalOpen(true)
                }}>Add to cart</button>
                {isModalOpen && <Modal />}
            </div>
        </>
    )
}