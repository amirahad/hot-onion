import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'
import './Categories.css'
import CategoryButtons from './CategoryButtons'

const Categories = () => {
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('Lunch');

    useEffect(() => {
        fetch('./db.json')
            .then(res => res.json())
            .then(data => setCategories(data))

    }, [])

    let filteredMeals = categories;
    if (selectedCategory !== 'All') {
        filteredMeals = categories.filter(meal => meal.category === selectedCategory);
    }

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
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>
            </div>
        </>
    )
}


export default Categories
