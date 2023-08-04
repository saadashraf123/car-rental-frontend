
import React, { useEffect, useState } from 'react';
import { Typography, Paper, Grid, Button, createStyles } from '@mui/material';
import { useStateContext } from '../../Contexts/stateContext';
import useFetch from '../../Hooks/useFetch';
import swal from 'sweetalert';


const BookingItem = ({ data, isPendingOrder }) => {
    const classes = createStyles({
        ButtonStyles: {
            width: 150,
            //   backgroundColor: "#DC3545",
            //   color: "white",
            fontWeight: "bold",
            mt: 2,
            ml: 10,
            p: 1,
            mb: 2,
            '&:hover': {
                // backgroundColor: 'white',
                // color: "#DC3545",
            },
        },
    });

    const { car_name, car_location, car_description, booking_id } = data;
    const [request, setRequest] = useState("");

    const url = {
        method: request,
        url: `booking/${booking_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { error, loading, fetchApi } = useFetch();

    const handleAccept = async () => {
        setRequest("PUT")
    }
    const handleDecline = async () => {
        setRequest("delete")
    }

    useEffect(() => {
        if (request) {
            fetchApi(url)
                .then(() => {
                    swal("Success!", `Booking ${request === "PUT" ? "Approved" : "Declined"} Successfully!`, "success");
                    window.location.reload();
                })
                .catch((error) => {
                    swal("Something Went Wrong!", "Try again later!", "error");
                })
        }
    }, [request])

    const totalHours = data?.total_rent / data?.price;


    return (
        <Grid container sx={{ height: '100%', my: 3, justifyContent: 'center' }}>
            <Paper elevation={6} square sx={{ p: 4, width: "90%", display: "flex" }}>
                <Grid>
                    <img style={{ height: "30vh" }} class="" alt="100%x280" src={`data:image/*;base64,${data?.car_image}`} />
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'black', fontWeight: 'bold', marginTop: 3 }}
                    >
                        Car Name: {car_name}
                    </Typography>
                    <Typography
                        component="h6"
                        variant="P"
                        sx={{ color: 'gray', marginTop: 1 }}
                    >
                        Car Location: {car_location}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: 'gray', marginTop: 1 }}
                    >
                        Car Description: {car_description}
                    </Typography>
                    <Typography>
                        <br />
                        <h6 style={{ fontSize: '14.5px', color: '#5A5A5A', marginLeft: '3%' }}> Full name: {data?.firstname + " " + data.lastname} </h6>
                        <h6 style={{ fontSize: '14.5px', color: '#5A5A5A', marginLeft: '3%' }}>Price : {data?.total_rent}/rs</h6>
                        <h6 style={{ fontSize: '14.5px', color: '#5A5A5A', marginLeft: '3%' }}>Hours :{totalHours} Hrs</h6>
                    </Typography>
                    {isPendingOrder && (
                        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>

                            <Button style={{ backgroundColor: 'green', color: 'white' }}
                                className={classes.ButtonStyles} variant="contained" onClick={handleAccept} >
                                Accept
                            </Button>
                            <Button style={{ backgroundColor: 'red', color: 'white' }}
                                className={classes.ButtonStyles} variant="contained" onClick={handleDecline}>
                                Decline
                            </Button>
                        </div>
                    )}
                </Grid>
            </Paper>
        </Grid>
    );
};

export default BookingItem;