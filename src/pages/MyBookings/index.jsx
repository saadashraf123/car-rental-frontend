import React from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import useFetch from '../../Hooks/useFetch';
import BookingItem from '../../components/BookingItem';
import carsData from '../../data/data.json'

const MyBookings = () => {
    const defaultTheme = createTheme();
    const id = 3
    const url = {
        method: 'GET',
        url: `booking/myBookings/${id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, error, loading } = useFetch(url);
    // const result = data?.bookings
    const result = carsData?.cars
    console.log(result);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginTop: '10px' }} container sx={{ height: '100%', justifyContent: 'center' }}>
                <Paper elevation={6} square sx={{ p: 4, width: "90%" }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        {result?.map((item, index) => (
                            <BookingItem key={index} data={item} />
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default MyBookings