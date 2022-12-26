import React, { useEffect } from 'react'
import useCart from '../../Hooks/useCart';
import useMeals from '../../Hooks/UseMeals'
import { getStoredCart } from '../../utilities/fakedb';

const PlaceOrder = () => {
    const [meals] = useMeals();
    const [cart, setCart] = useCart([]);




    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='title'>your Order</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8'>
                        {
                            cart.length === 0 ? <h3>ERROR!!!</h3> :
                                cart.map(
                                    (meal) => <div className='row'>
                                        <div className='col-md-4'>
                                            <img src={meal.img}
                                                alt=""
                                                className="category__img img-fluid"
                                            />
                                        </div>
                                        <div className='col-md-8'>
                                            <h3>{meal.title}</h3>
                                            <p>{meal.description}</p>
                                            <h4>${meal.price}</h4>
                                            <h4>Quantity: {meal.quantity}</h4>
                                        </div>
                                    </div>

                                )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlaceOrder;
