import React from 'react';
import './Cart.css'
const Cart = (props) => {
    // console.log('from caart', props)
    const { strMealThumb, strMeal, strCategory, strInstructions, strArea } = props.meal;
    return (
        <div className="cart-meal-display">
            <img src={strMealThumb} alt="" width="350px" />
            <h5>{strMeal}</h5>
            <p>{strCategory}</p>
            <p>{strArea}</p>
            <p className="meal-instructions">{strInstructions}</p>
        </div>
    );
};

export default Cart;