import React from 'react'
import "./style.module.css"
import { Typography, Paper, Box, Grid, createTheme, ThemeProvider, Button, createStyles } from '@mui/material'
import FeaturedItem from '../FeaturedItem';

const CarsItem = () => {
    const defaultTheme = createTheme();
    const classes = createStyles({
        ButtonStyles:
        {
            width: 150,
            backgroundColor: "#DC3545",
            color: "white",
            fontWeight: "bold",
            mt: 2,
            ml: 10,
            p: 1,
            mb: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
    });
    return (
        <Grid style={{ marginTop: '10px' }} container sx={{ height: '100%', justifyContent: 'center' }}>
            <Paper elevation={6} square sx={{ p: 4, width: "90%", display: "flex" }}>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img class="img-fluid" alt="100%x280" src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d" />
                    </div>
                </div>
                <Grid>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}
                    >
                        Car Rental System
                    </Typography>
                    <Typography
                        component="h6"
                        variant="P"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore sed dolores eaque cumque aliquid? Veniam impedit sunt exercitationem soluta, molestiae dignissimos quisquam. Laborum, architecto? Fugit laborum eveniet repellendus ratione consectetur?
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                    >
                        Book Now
                    </Button>
                </Grid>
            </Paper>
        </Grid >
    )
}

export default CarsItem