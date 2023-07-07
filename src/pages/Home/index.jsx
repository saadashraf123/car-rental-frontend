import React from 'react'
import "./style.module.css"
import { Contact, Featured, Footer, HeroBanner, SearchSection } from '../../components'
import About from '../../components/About'

const Home = () => {
    return (
        <>
            <HeroBanner />
            <SearchSection />
            <About/>
            <Featured />
            <Contact />
            <Footer />
        </>
    )
}

export default Home