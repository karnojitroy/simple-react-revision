import React from 'react';
import './Meals.css'
const Meals = (props) => {
    const { strMealThumb, strMeal } = props.meal;
    // console.log(props)
    return (
        <div className="meal-container">
            <div className="card">
                <img src={strMealThumb} alt="" width="200px" />
                <h5>{strMeal}</h5>
                <button onClick={() => props.handleItemClicked(props.meal)}
                    className="item-details">
                    <i class="fas fa-mouse"></i> Details</button>
            </div>
        </div>
    );
};

export default Meals;