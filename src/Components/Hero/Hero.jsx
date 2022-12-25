import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <>
            <div className="banner">
                <div className="banner__middle">
                    <div className="col-12 col-md-8 ml-5">
                        <h2 className='tagline'>Best food waiting for your belly</h2>
                        <br />
                        <input
                            type="text"
                            placeholder="Search food items"
                            className="banner__input"
                        />
                        <input type="submit" value="Submit" className="banner__button" />
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
        </>
    )
}

export default Hero
