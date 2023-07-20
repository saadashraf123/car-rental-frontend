import React from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import { CarsItem } from '../../components';
import useFetch from '../../Hooks/useFetch';

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
    const result = data?.car

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

export default MyCars