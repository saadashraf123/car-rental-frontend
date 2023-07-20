import React from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import useFetch from '../../Hooks/useFetch';
import carsData from '../../data/data.json'
import MyCarsItem from '../../components/MyCarsItem';

const MyCars = () => {
    const defaultTheme = createTheme();
    const id = 1
    const url = {
        method: 'GET',
        url: `cars/myCars/${id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, error, loading } = useFetch(url);
    // const result = data?.car
    const result = carsData?.cars

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
                            <MyCarsItem key={index} data={item} />
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default MyCars