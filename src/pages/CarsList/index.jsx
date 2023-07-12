import React from 'react'
import "./style.module.css"
import { Typography, Paper, Box, Grid, createTheme, ThemeProvider, Button } from '@mui/material'
import { CarsItem } from '../../components';
import cars from '../../data/data.json'

const CarsList = () => {
    const defaultTheme = createTheme();
    const data = cars.cars
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
                        {data.map((item, index) => (
                            <CarsItem key={index} data={item} />
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default CarsList