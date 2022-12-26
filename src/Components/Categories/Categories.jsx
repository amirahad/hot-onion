import React, { useEffect, useState } from 'react'
import useCart from '../../Hooks/useCart'
import useMeals from '../../Hooks/UseMeals'
import { addToDb, getStoredCart } from '../../utilities/fakedb'
import Category from '../Category/Category'
import './Categories.css'
import CategoryButtons from './CategoryButtons'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom'

const Categories = () => {
    const [meals] = useMeals();
    const [selectedCategory, setSelectedCategory] = useState('Lunch');
    const [cart, setCart] = useState([]);

    let filteredMeals = meals;
    if (selectedCategory !== 'All') {
        filteredMeals = meals.filter(meal => meal.category === selectedCategory);
    }


    useEffect(() => {
        const savedCart = getStoredCart();
        const storedCart = [];
        if (meals.length) {
            for (const key in savedCart) {
                const addedProduct = meals.find((meal) => meal.id === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [meals]);
    // console.log(getStoredCart(cart));
    // console.log(`cart: ${cart.length}`);
    // console.log(cart);


    const handleAddMeal = (meal) => {
        const exists = cart.find((pd) => pd.key === meal.id);
        let newCart = [];
        if (exists) {
            const rest = cart.filter((pd) => pd.key !== meal.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, meal];
        } else {
            meal.quantity = 1;
            newCart = [...cart, meal];
        }
        setCart(newCart);
        addToDb(meal.id);
    };

    return (
        <>
            <div className="container" id='meals'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='title'>Our Ready Meals</h2>
                    </div>

                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="category__filter">
                            <CategoryButtons
                                selectedCategory={selectedCategory}
                                onCategorySelection={setSelectedCategory}
                            />
                        </div>
                    </div>
                </div>

                <div className="row">
                    {
                        filteredMeals.map(category => <Category
                            handleAddProduct={handleAddMeal}
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
                <div className='row justify-content-center '>
                    <div className='col-md-4 text-center'>

                        <Link to='/placeorder'>
                            <button
                                className='view-cart-btn'
                            >
                                <AddShoppingCartIcon active /> View Your Cart
                            </button>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}


export default Categories;
