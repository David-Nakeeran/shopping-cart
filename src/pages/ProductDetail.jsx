import { useParams } from "react-router-dom";
import{useState, useEffect} from 'react';

export default function ProductDetail() {
    const [product, setProduct] = useState()
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
    }, []);

    return (
        <h1>Product Detail page</h1>
        
    )
}