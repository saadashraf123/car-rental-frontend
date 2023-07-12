import React from 'react';
import "./style.module.css";
import { Typography } from '@mui/material';
import FeaturedItem from '../FeaturedItem';
import cars from '../../data/data.json'

const Featured = () => {
    const data = cars.cars

    const typographyStyles = {
        color: "#000",
        opacity: "0.8",
        marginBottom: "10px",
        fontFamily: "sans serif",
        letterSpacing: "2px",
        textAlign: "center",
    };
    return (
        <>
            <section id="featured" class="pt-5 pb-5">
                <div class="container">
                    <Typography align='center' sx={[typographyStyles, { fontFamily: "sans-serif", opacity: "1" }]} variant='h5'>Featured<b className='bold'> Cars</b></Typography>
                    <hr style={{ background: "#cc1836", margin: "0px 40% 5% 40%" }}></hr>
                    <div class="row">
                        <div class="col-12">
                            <div id="carouselExampleIndicators2" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="row">
                                            {data.map((item, index) => (
                                                <FeaturedItem key={index} data={item} />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Featured;
