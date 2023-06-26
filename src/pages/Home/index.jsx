import React from 'react'
import "./style.module.css"
import { Contact, Featured, Footer, HeroBanner, Navbar, SearchSection } from '../../components'

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroBanner />
            <SearchSection />
            <Featured />
            <Contact />
            <Footer />
        </>
    )
}

export default Home