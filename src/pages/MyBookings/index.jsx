import React, { useState, useEffect } from 'react'
import "./style.module.css"
// import { Paper, Box, Grid, createTheme, ThemeProvider , Button } from '@mui/material'
import { Paper, Box, Grid, createTheme, ThemeProvider, Tab, Tabs } from '@mui/material';

import useFetch from '../../Hooks/useFetch';
import BookingItem from '../../components/BookingItem';
import carsData from '../../data/data.json'
import { useStateContext } from '../../Contexts/stateContext';

const MyBookings = () => {
    const defaultTheme = createTheme();
    const [currentTab, setCurrentTab] = useState(0);
    const { user } = useStateContext();
    const id = user?.user_id
    const url = {
        method: 'GET',
        url: `booking/${currentTab == 0 ? `myBookings/${id}` : (currentTab == 1 ? `myOrders/${id}` : `pendingOrders/${id}`)}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, error, loading, fetchApi } = useFetch();
    const result = data?.bookings
    console.log(result);

    useEffect(() => {
        fetchApi(url)
    }, [currentTab])

    const handleChangeTab = (event, newValue) => {
        setCurrentTab(newValue);
    };



    // Define custom styles for the tabs
    const tabStyle = {
        '&.Mui-selected': {
            color: 'white',
            backgroundColor: '#DC3545',
        },
        '&:hover': {
            color: '#DC3545',
            backgroundColor: 'white',
        },
    };


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginTop: '10px' }} container sx={{ height: '100%', justifyContent: 'center' }}>
                <Paper elevation={6} square sx={{ p: 4, width: "90%" }}>

                    {/* Two tabs */}

                    <Tabs value={currentTab} onChange={handleChangeTab} indicatorColor="none">

                        <Tab label="My Bookings" sx={tabStyle} />


                        <Tab label="My orders" style={{ marginLeft: '20px' }} sx={tabStyle} />

                        <Tab label="Pending Orders" style={{ marginLeft: '20px' }} sx={tabStyle} />


                    </Tabs>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        {loading ? <div class="spinner-border my-5" role="status" ></div> :
                            result?.length ? result?.map((item, index) => (
                                <BookingItem
                                    key={index}
                                    data={item}
                                    isPendingOrder={currentTab === 2}
                                />
                            ))
                                :
                                <h6 className='mt-5'>
                                    Currently No Bookings
                                </h6>
                        }
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider>
    );
};

export default MyBookings