import { Outlet } from "react-router-dom";
import {useState, useEffect, useContext} from "react"
import Header from "./Header";
import Footer from "./Footer";
import { AppContext } from "../App";


export default function Layout() {
    // const [product, setProduct] = useState([]);
    // const [quantity, setQuantity] = useState(1);
    // const [cart, setCart] = useState(null)

    

    // const testCart = [
    // { id: 1, name: "Item 1" },
    // { id: 1, name: "Item 1" },
    // { id: 2, name: "Item 2" },
    // { id: 3, name: "Item 3" },
    // { id: 2, name: "Item 2" },
    // { id: 1, name: "Item 1" },
    // { id: 3, name: "Item 3" },
    // { id: 4, name: "Item 4" }
    // ];

    // const uniqueArr = testCart.reduce((acc, current) => {
            
    //     const duplicate = acc.some(element => element.id === current.id)

    //     if(!duplicate) {
    //         return [...acc, current]
    //     }
            
    //      return acc   
        
        
    // }, [])
    
    // function addToCart() {
    //     setCart(prevState => {
    //         if(prevState === null) {
    //             return [product]
    //          } else {
    //             return [...prevState,
    //                 product
    //             ]
    //         }
            
    //     })
    // }
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
        
    )
}