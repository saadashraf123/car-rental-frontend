import React from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import { CarsItem } from '../../components';
import { useLocation } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';


const CarsList = () => {
    const defaultTheme = createTheme();

    const location = useLocation();
    const { car_name, car_category, car_model, car_location } = location.state;

    const url = {
        method: 'GET',
        url: `cars/search/${car_name}/${car_category}/${car_model}/${car_location}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
        // data: [
        //     {
        //         Text: 'Ich würde wirklich gern Ihr Auto um den Block fahren ein paar Mal.',
        //     },
        // ],
    };

    const { data, error, loading } = useFetch(url);
    const result = data?.cars

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
                            <CarsItem key={index} data={item} />
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default CarsList