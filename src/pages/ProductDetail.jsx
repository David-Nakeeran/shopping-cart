import { useParams } from "react-router-dom";
import{useState, useEffect} from 'react';

export default function ProductDetail() {
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const {id} = useParams()
    

    async function getProducts() {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            if(!response.ok) {
                throw Error(response.status)
            }
            const data = await response.json();
            console.log(data);
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
    }, [id]);

    return (
        <>
        {product ?
            <div className="product-detail" key={product.id}>
                <div>
                    <img src={`${product.image}`} alt={`image of ${product.name}`}></img>
                </div>
                <div>
                    <p>{product.title}</p>
                    <p>{product.description}</p>
                    <p>£{product.price}</p>
                </div>
                <div className="product-quantity">
                    <button>-</button>
                    <input type='number' value={quantity} readOnly/>
                    <button>+</button>
                </div>
                <button>Buy now</button>
            </div>
        : <h2>Loading...</h2>}
        </>
    )
}