import React from 'react'
import "./style.module.css"
import { Link } from 'react-router-dom';
import { Typography, Paper, Box, Grid, createTheme, ThemeProvider, Button, createStyles } from '@mui/material'
import FeaturedItem from '../FeaturedItem';

const CarsItem = ({ data }) => {
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
        <Grid container sx={{ height: '100%', my: 3, justifyContent: 'center' }}>
            <Paper elevation={6} square sx={{ p: 4, width: "90%", display: "flex" }}>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img style={{ height: "40vh" }} class="img-fluid" alt="100%x280" src={data.imageUrl[0]} />
                    </div>
                </div>
                <Grid>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}
                    >
                        {data.name}
                    </Typography>
                    <Typography
                        component="h6"
                        variant="P"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        {data.location}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        {data.description}
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                        component={Link}
                        to={"/details"}
                        state={data}
                    >
                        View
                    </Button>
                </Grid>
            </Paper >
        </Grid >
    )
}

export default CarsItem