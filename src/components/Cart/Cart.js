import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart
    // const total = cart.reduce((total, item) => total + item.price , 0)
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const item = cart[i];
        total = total + item.price * item.quantity; 
    }
    
    let shipping = 0;
    if(total > 1000){
        shipping = 29.99
    }
    else if(total > 500){
        shipping = 24.99
    }
    else if(total > 300){
        shipping = 20.99
    }
    else if(total > 100){
        shipping = 10.99
    }
    else if(total > 50){
        shipping = 4.99
    }
    
    let tax = total / 10
    const grandTotal = shipping + total + tax;
    const formatNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }

    return (
        <div>
            <h3>Order Summary</h3>
            <p>Items Order : {cart.length}</p>
            <p>Shipping : {formatNumber(shipping)}</p>
            <p>Items : {formatNumber(total)}</p>
            <p>Tax : {formatNumber(tax)}</p>
            <p>Total Price : {formatNumber(grandTotal)}</p>
            <br/>
            { 
                props.children
            }
        </div>
    );
};

export default Cart;