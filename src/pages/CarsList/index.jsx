import React, { useEffect } from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import { CarsItem } from '../../components';
import { useLocation } from "react-router-dom";
import useFetch from '../../Hooks/useFetch';
import { useStateContext } from '../../Contexts/stateContext';

const CarsList = () => {
    const defaultTheme = createTheme();
    const { user } = useStateContext();
    const location = useLocation();
    const { car_name, car_category, car_model, car_location } = location.state;

    const url = {
        method: 'GET',
        url: `cars/search/${car_name}/${car_category}/${car_model}/${car_location}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, error, loading, fetchApi } = useFetch();
    const result = data?.cars

    useEffect(() => {
        fetchApi(url)
    }, [])

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
                            user.user_id !== item.user_id
                            &&
                            <CarsItem key={index} data={item} />
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default CarsList