import React, { useEffect, useState } from 'react'
import styles from "./style.module.css"
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FaCarSide } from 'react-icons/fa';
import { RxAvatar } from 'react-icons/rx';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IconButton } from '@mui/material'
import ButtonComponent from '../Button';
import { createStyles } from '@mui/material'
import { useStateContext } from '../../Contexts/stateContext';

const NavBar = () => {
    const [scrolled, setScrolled] = useState(false)
    const { user } = useStateContext();
    const navigate = useNavigate()
    window.onscroll = function () {
        if (window.pageYOffset > 0) {
            setScrolled(true)
        }
        else {
            setScrolled(false)
        }
    }
    const classes = createStyles({
        extraStyles:
        {
            width: 100,
            p: 1,
            mt: 1,

        },
        scrolledStyles: {
            backgroundColor: "white",
            color: "#DC3545",
            '&:hover': {
                backgroundColor: "#DC3545",
                color: "white",
            },
        }
    });
    const logoutHandler = () => {
        localStorage.removeItem("token")
        window.location.reload();
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
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a href="#search" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Find Car
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#about" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#featured" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Featured
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className={`nav-link fw-bold ${scrolled ? "text-white" : "text-danger"}`} >
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    {user ?
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
                                        Feedbacks
                                    </Link>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <Link to="/settings" className='dropdown-item' >
                                        Settings
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={logoutHandler} className='dropdown-item' >
                                        Logout
                                    </Link>
                                </li>
                            </ul>
                        </div> :
                        <>
                            <ButtonComponent text={"Login"} variant={"contained"} size={"medium"} extraStyles={classes.extraStyles} scrolledStyles={scrolled && classes.scrolledStyles} to={"/login"} />
                            <ButtonComponent text={"Register"} variant={"contained"} size={"medium"} extraStyles={classes.extraStyles} scrolledStyles={scrolled && classes.scrolledStyles} to={"/signup"} />
                        </>}
                </div>
            </div>
        </nav >
    )
}

export default NavBar




