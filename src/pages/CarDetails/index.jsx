import React from 'react'
import { ButtonComponent, Reviews } from '../../components'
import car from '../../assets/images/car2.png'
import { Grid, Paper, Typography, Container, Box } from '@mui/material';
import { useLocation } from "react-router-dom";

const CarDetails = (props) => {
    const location = useLocation();
    const data = location.state;
    return (
        <>
            <Container sx={{ my: 10, height: "100vh" }}>
                <Grid container maxHeight="auto" padding={5} spacing={5} elevation={5} component={Paper}>
                    <Grid item md={6} xs={12} sx={{}}>
                        <Box sx={{}}>
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img style={{ height: "70vh" }} src={data.imageUrl[0]} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ height: "70vh" }} src={data.imageUrl[1]} class="d-block w-100" alt="..." />
                                    </div>
                                    <div class="carousel-item">
                                        <img style={{ height: "70vh" }} src={data.imageUrl[2]} class="d-block w-100" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item md={6} xs={12} sx={{}}>
                        <Box sx={{}}>
                            <Typography
                                component="h6"
                                variant="h5"
                                sx={{ color: 'gray' }}
                            >
                                {data.name} {data.variant} {data.model}
                            </Typography>
                            <Typography
                                component="h6"
                                variant="p"
                                sx={{ color: 'teal', mb: 5 }}
                            >
                                {data.location}
                            </Typography>
                            <Typography
                                component="h6"
                                variant="P"
                                sx={{ color: 'gray', mb: 2 }}
                            >
                                {data.description}
                                {data.description}
                            </Typography>
                            <Typography
                                component="h6"
                                variant="P"
                                sx={{ color: 'red', mb: 2 }}
                            >
                                Rent: {data.price}Rs/hr
                            </Typography>
                            <ButtonComponent text={"Book Car"} variant={"contained"} size={"medium"} to={"/"} />
                        </Box>
                    </Grid>
                </Grid>
            </Container >
        </>
    );
}

export default CarDetails