import React from 'react'
import "./style.module.css"
import { Contact, Featured, Footer, HeroBanner, NavBar, SearchSection } from '../../components'

const Home = () => {
    return (
        <>
            <NavBar />
            <HeroBanner />
            <SearchSection />
            <Featured />
            <Contact />
            <Footer />
        </>
    )
}

export default Home