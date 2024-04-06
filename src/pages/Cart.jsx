import { useContext } from "react";
import { AppContext } from "../App";

export default function Cart() {
    const {cart, setCart} = useContext(AppContext);

    function incrementQuantity(productId) {
        setCart(prevCart => {
            return prevCart.map(item => {
                if(item.id === productId) {
                    return {...item, quantity: item.quantity + 1}
                } else {
                    return item
                };
            });
        });
    };

    function decrementQuantity(productId) {
        setCart(prevCart => {
            return prevCart.map(item => {
                if(item.id === productId) {
                    if(item.quantity === 1) {
                        return item
                    }
                    return {...item, quantity: item.quantity - 1}
                } else {
                    return item
                };
            });
        });
    };

    if(!cart) {
        return <h1>Loading...</h1>
    }

    const cartElements = cart.map(item => {
        return (
        
        <div className="cart-detail" key={item.id} id={item.id}>
            <div className="cart-img-container">
                <img src={`${item.image}`} alt={`image of ${item.name}`}></img>
            </div>
            <div>
                <p>{item.title}</p>
                <p>£{item.price.toFixed(2)}</p>
                <div className="cart-quantity">
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <input type='number' value={item.quantity} readOnly/>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                    
                </div>
                <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
            </div>
            
        </div>
    
    )})
        console.log(cart);  
    
    const totalPrice = cart.reduce((acc, current) => {
        return acc + (current.price * current.quantity)
    }, 0).toFixed(2) 
    
    
    function removeItemFromCart(id) {
        setCart(prevCart => {
            return prevCart.filter(item => {
                if(id !== item.id) {
                    return item
                }
            })
        })
    }

  
    return (
        <div>
            <div className="cart-container">
                {cartElements}
            </div>
            <div className="total-price-container">
                <p className="cart-total-price">Total Price</p>
                <p className="cart-total-price">£{totalPrice}</p>
            </div>
        </div>
        
    )
        

}