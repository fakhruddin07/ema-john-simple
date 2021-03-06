import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product
    const reviewItemStyle = {
        borderBottom : '1px solid lightgray',
        paddingBottom : '5px',
        marginBottom : '5px',
        marginLeft : '200px'
    }
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p><small>$ {price}</small></p>
            <p>Quantity: {quantity}</p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;