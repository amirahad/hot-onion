import React from 'react'
import './Category.css'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Category = (props) => {
    const { img, title, description, price } = props.category
    return (
        <>
            <div className="col-md-4  mb-4">
                <div className="category">
                    <img src={img} alt=""
                        className="category__img img-fluid"
                    />
                    <h3 className="category__title">{title}</h3>
                    <p className="category__description">{description}</p>
                    <h4 className="category__price">${price}</h4>
                    <button className="category__button">
                        <AddShoppingCartIcon className='mr-2' />
                        Add to cart</button>
                </div>
            </div>
        </>

    )
}

export default Category
