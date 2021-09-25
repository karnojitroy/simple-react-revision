import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Header from '../Header/Header';
import Meals from '../Meals/Meals';
import './MealDb.css'
const MealDb = () => {
    const [meals, setMeals] = useState([]);
    const [meal, setMeal] = useState([]);
    const [searchMeal, setSearchMeal] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=a`)
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals);
                setSearchMeal(data.meals)
            });

    }, []);


    const handleSearch = event => {
        const searchText = event.target.value;
        console.log(searchText)
        const matchText = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchText.toLowerCase()));
        setSearchMeal(matchText)

    }

    const handleItemClicked = (meal) => {
        setMeal(meal)
    }

    return (
        <div>
            <div className="container">
                <h1 className="headding">Welcome to TheMealDB</h1>
                <hr />
                <input className="second-search"
                    type="text"
                    onChange={handleSearch}
                    placeholder="type here to search" />
                <hr />
            </div>
            <div className="mealDb">
                <div className="meals">
                    {
                        searchMeal.map(meal => <Meals
                            key={meal.idMeal}
                            meal={meal}
                            handleItemClicked={handleItemClicked}
                        ></Meals>)
                    }

                </div>
                <div className="meal-details">
                    <Cart meal={meal}></Cart>
                </div>
            </div>
        </div>
    );
};

export default MealDb;