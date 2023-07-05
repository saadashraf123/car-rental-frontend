import React, { useState } from 'react'
import styles from "./style.module.css"
import { Link } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconButton } from '@mui/material'


const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    return (
        <nav className={`navbar sticky-top navbar-expand-lg ${scrolled ? styles.scrolled : "bg-white"}`} >
            <div className="container-fluid">
                <Link to="/" className={`navbar-brand text-decoration-none fs-2 ${scrolled ? "text-white" : "text-danger"}`} >
                    <FaCarSide className='me-2' />
                    The Rentals
                </Link>
                <IconButton className={`navbar-toggler ${styles.icon}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <GiHamburgerMenu className={`navbar-toggler-icon ${scrolled ? styles.scrolled : styles.unScrolled}`} />
                </IconButton>
                {/* <button className={`navbar-toggler ${scrolled ? "bg-danger" : "bg-danger"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                </button> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#search" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Find Car
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#about" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#featured" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Featured
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="#contact" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-nav nav-item dropdown">
                        <a className={`nav-link dropdown-toggle ${scrolled ? "text-white" : "text-danger"}`} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <RxAvatar className='fs-1' />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li>
                                <Link to="/addcar" className='dropdown-item' >
                                    Add New Car
                                </Link>
                            </li>
                            <li>
                                <Link to="/mycars" className='dropdown-item' >
                                    My Cars
                                </Link>
                            </li>
                            <li>
                                <Link to="/mybookings" className='dropdown-item' >
                                    My Bookings
                                </Link>
                            </li>
                            <li>
                                <Link to="/feedbacks" className='dropdown-item' >
                                    Reviews
                                </Link>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <Link to="/settings" className='dropdown-item' >
                                    Settings
                                </Link>
                            </li>
                            <li>
                                <Link to="/" className='dropdown-item' >
                                    Logout
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavBar




