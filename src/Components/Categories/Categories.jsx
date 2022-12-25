import React, { useEffect, useState } from 'react'
import Category from '../Category/Category'

const Categories = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('db.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <>
            <div className="categories py-5">
                <div className="container">
                    <div className="row">
                        {
                            categories.map(category => (
                                <Category
                                    key={category.id}
                                    category={category}
                                />
                            ))
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Categories
