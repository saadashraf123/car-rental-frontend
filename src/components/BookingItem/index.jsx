import React from 'react'
import "./style.module.css"
import { Link } from 'react-router-dom';
import { Typography, Paper, Grid, Button, createStyles } from '@mui/material'

const BookingItem = ({ data }) => {
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
                <Grid>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}
                    >
                        {data.car_name}
                    </Typography>
                    <Typography
                        component="h6"
                        variant="P"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        {data.car_location}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        {data.car_description}
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

export default BookingItem