import { Link, useParams, useOutletContext } from "react-router-dom";
import{useEffect, useContext} from 'react';
import { AppContext } from "../App";
import Modal from "../components/Modal.jsx";


export default function ProductDetail() {
    
    const {product, setProduct, setCart, cart, isModalOpen, setIsModalOpen} = useContext(AppContext);
    
    const {id} = useParams()
    

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

    console.log(cart);
    async function getProducts() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if(!response.ok) {
                throw Error(response.status)
            }
            const data = await response.json();
            setProduct(data);
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

    if(!product) {
        return <h2>Loading...</h2>
    }

    return (
        <>
        {/* {product ? */}
            <div className="product-detail" key={product.id}>
                <Link to='../..'
                relative="path"
                >Back to shop</Link>
                <div>
                    <img src={`${product.image}`} alt={`image of ${product.name}`}></img>
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>£{product.price && product.price.toFixed(2)}</p>
                </div>
                <button onClick={() => {
                    addToCart() 
                    setIsModalOpen(true)
                }}>Add to cart</button>
                {isModalOpen && <Modal />}
            </div>
        {/* : <h2>Loading...</h2>} */}
        </>
    )
}