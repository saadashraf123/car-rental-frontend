import React from 'react'
import "./style.module.css"
import car from '../../assets/images/car2.png'
import { Grid, TextField, Button, Paper, Typography, Box, CardActions } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BiSolidRightArrowCircle } from 'react-icons/bi';
import { Login } from '../../pages';
import { Link } from 'react-router-dom';


const HeroBanner = () => {
    const defaultTheme = createTheme();
    const ButtonStyles = {
        backgroundColor: "red",
        color: "white",
        width: '100%',
        maxWidth: '200px',
        fontWeight: "bold",
        mt: 2,
        mx: 1,
        p: 2,
        '&:hover': {
            backgroundColor: 'white',
            color: "red"
        },
    };
    const ExtraStyles = {
        backgroundColor: "white",
        color: "red",
        '&:hover': {
            backgroundColor: 'red',
            color: "white"
        },
    }

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Grid container component="main" sx={{ height: '100vh' }}>
                    <Grid item xs={12} sm={12} md={5}>
                        <Box
                            sx={{
                                mt: 15,
                                mx: 8,
                                display: 'flex',
                                flexDirection: 'column',
                                // alignItems: 'center',
                            }}
                        >
                            <Typography component="h4" variant="h4" sx={{ color: "red", fontWeight: "semi-bold" }}>
                                Plan your trip now
                            </Typography>
                            <Typography component="h4" variant="h3">
                                Save <span>big</span> with our car rental
                            </Typography>
                            <Typography component="h4" variant="h6">
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </Typography>
                            <Box>
                                <Button variant="contained" size='medium' component={Link} to={'/details'} sx={ButtonStyles}
                                    endIcon={<BsCheckCircleFill />}>
                                    Book Car
                                </Button>
                                <Button variant="contained" size='medium' component={Link} to={'/details'} sx={[ButtonStyles, ExtraStyles]}
                                    endIcon={<BiSolidRightArrowCircle />}>
                                    Learn More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={7}
                        sx={{
                            my: 10,
                        }}
                    >
                        <Box>
                            <img
                                src={car}
                                style={{ maxWidth: "100%" }}
                                alt='car'
                                height="80%"
                            // width="80%"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </ThemeProvider >
        </>
    )
}

export default HeroBanner