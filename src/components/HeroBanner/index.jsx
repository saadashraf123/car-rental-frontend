import React from 'react'
import "./style.module.css"
import car from '../../assets/images/car.png'
import { Link } from 'react-router-dom'

const HeroBanner = () => {
    return (
        <>
            <section id="home" className="hero-section">
                <div className="container">
                    <img className="bg-shape" src={""} alt="bg-shape" />
                    <div className="hero-content">
                        <div className="hero-content__text">
                            <h4>Plan your trip now</h4>
                            <h1>
                                Save <span>big</span> with our car rental
                            </h1>
                            <p>
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </p>
                            <div className="hero-content__text__btns">
                                <Link
                                    onClick={""}
                                    className="hero-content__text__btns__book-ride"
                                    to="/"
                                >
                                    Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                                </Link>
                                <Link className="hero-content__text__btns__learn-more" to="/">
                                    Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>

                        {/* img */}
                        <img
                            src={car}
                            alt="car-img"
                            className="hero-content__car-img"
                        />
                    </div>
                </div>

                {/* page up */}
                <div
                    onClick={""}
                    className={""}
                >
                    <i className="fa-solid fa-angle-up"></i>
                </div>
            </section>
        </>
    )
}

export default HeroBanner