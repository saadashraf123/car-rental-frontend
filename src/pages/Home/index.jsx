import React from 'react'
import "./style.module.css"
import { Contact, Featured, Footer, HeroBanner, SearchSection } from '../../components'

const Home = () => {
    return (
        <>
            <HeroBanner />
            <SearchSection />
            <Featured />
            <Contact />
            <Footer />
        </>
    )
}

export default Home