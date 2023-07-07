import React from 'react'
import "./style.module.css"
import { Typography, Paper, Box, Grid, createTheme, ThemeProvider, Button } from '@mui/material'
import { CarsItem } from '../../components';

const CarsList = () => {
    const defaultTheme = createTheme();
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
                        <Typography
                            component="h1"
                            variant="h5"
                            sx={{ color: 'red', fontWeight: 'bold' }}
                        >
                            Cars List
                        </Typography>
                        <CarsItem />
                        <CarsItem />
                        <CarsItem />
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default CarsList