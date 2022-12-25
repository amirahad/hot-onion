import React from 'react'
import Categories from '../../Components/Categories/Categories'
import Hero from '../../Components/Hero/Hero'
import Experts from '../../Components/Experts/Experts'
import Contacts from '../../Components/Contacts/Contacts'

const Home = () => {
    return (
        <div>
            <Hero />
            <Categories/>
            <Experts />
            <Contacts />
        </div>
    )
}

export default Home
