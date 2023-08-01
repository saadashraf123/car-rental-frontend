import React, { useEffect } from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import useFetch from '../../Hooks/useFetch';
import carsData from '../../data/data.json'
import MyCarsItem from '../../components/MyCarsItem';
import { useStateContext } from '../../Contexts/stateContext';

const MyCars = () => {
    const defaultTheme = createTheme();

    const { user } = useStateContext()
    const url = {
        method: 'GET',
        url: `cars/myCars/${user?.user_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, error, loading, fetchApi } = useFetch();
    const result = data?.car
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
                        {loading ? <div class="spinner-border" role="status"></div> :
                            (result?.length ? result?.map((item, index) => (
                                <MyCarsItem key={index} carData={item} />
                            ))
                                :
                                <h6 className='mt-2'>
                                    You didn't Add any Car!
                                </h6>)
                        }
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default MyCars