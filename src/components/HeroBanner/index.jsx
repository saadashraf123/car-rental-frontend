import React from 'react'
import "./style.module.css"
import car from '../../assets/images/car2.png'
import { Grid, Button, Typography, Box, createStyles } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BsCheckCircleFill } from 'react-icons/bs';
import { BiSolidRightArrowCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import ButtonComponent from '../Button';

const defaultTheme = createTheme(
    {
        breakpoints: {
            values: {
                xs: 0,
                sm: 600,
                md: 900,
                lg: 1200,
            },
        }
    });
const HeroBanner = () => {
    const classes = createStyles({
        ExtraStyles: {
            backgroundColor: "white",
            color: "#DC3545",
            '&:hover': {
                backgroundColor: '#DC3545',
                color: "white"
            },
        }
    });

    return (
        <>
            <ThemeProvider theme={defaultTheme}>
                <Grid container spacing={1} component="main">
                    <Grid item xs={12} sm={12} md={6}>
                        <Box
                            sx={{
                                mt: 15,
                                mx: 8,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Typography component="h4" variant="h4" sx={{ color: "#DC3545", fontWeight: "semi-bold" }}>
                                Discover the Joy of Rental!
                            </Typography>
                            <Typography component="h4" variant="h3">
                                The same car with <span className='fw-bold text-danger'>lesser</span> money..
                            </Typography>
                            <Typography component="h4" variant="h6">
                                Rent the car of your dreams. Unbeatable prices, unlimited miles,
                                flexible pick-up options and much more.
                            </Typography>
                            <Box>
                                <ButtonComponent text={"Book Car"} variant={"contained"} size={"medium"} to={"/details"} icon={<BsCheckCircleFill />} />
                                <ButtonComponent text={"Learn More"} variant={"contained"} size={"medium"} to={"/details"} extraStyles={classes.ExtraStyles} icon={<BiSolidRightArrowCircle />} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        sm={12}
                        md={6}
                        my={{ xs: 5, sm: 5, md: 25, lg: 15 }}
                    >
                        <Box>
                            <img
                                src={car}
                                style={{ maxWidth: "100%" }}
                                alt='car'
                                height="100%"
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