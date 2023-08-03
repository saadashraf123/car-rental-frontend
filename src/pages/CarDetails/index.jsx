import React, { useEffect, useState } from 'react'
import { ButtonComponent, Reviews } from '../../components'
import car from '../../assets/images/car2.png'
import { Grid, Paper, Typography, Container, Box, DialogContentText, DialogContent, TextField, Button } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import FeedbackItem from '../../components/FeedbackItem';
import Modal from '../../components/Modal/Modal';
import useFetch from '../../Hooks/useFetch';
import { useStateContext } from '../../Contexts/stateContext';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';

const CarDetails = () => {
    const location = useLocation();
    const carData = location.state;

    const [bookingData, setBookingData] = useState(null)
    const [description, setDescription] = useState("")
    const [review, setReview] = useState(null)
    const [carReview, setCarReview] = useState(null)
    const [hours, setHours] = useState(0)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            review: ""
        }
    })

    const carUrl = {
        method: 'GET',
        url: `feedback/carFeedback/${carData?.car_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    };
    useEffect(() => {
        fetchApi(carUrl)
    }, [])

    const bookingUrl = {
        method: 'POST',
        url: `booking`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: bookingData && bookingData,
    };

    const feedbackUrl = {
        method: 'POST',
        url: `feedback`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: review && review,
    };
    const { error, loading, fetchApi, data } = useFetch()
    const result = data?.feedback;
    const { user } = useStateContext();

    const addReviewHandler = (data) => {
        if (user) {
            setReview({
                car_id: carData?.car_id,
                user_id_from: user?.user_id,
                user_id_to: carData?.user_id,
                fb_description: data?.review
            })
        }
        else {
            navigate("/car-rental-frontend/login")
        }
    }

    const confirmBooking = () => {
        if (user) {
            setBookingData({
                car_id: carData?.car_id,
                user_id: user?.user_id,
                description: description,
                total_rent: hours * carData?.price,
                car_user_id: carData?.user_id
            })
        }
        else {
            navigate("/car-rental-frontend/login")
        }
    }
    const navigate = useNavigate();
    // useEffect(() => {
    //     if (data?.feedback) {
    //         setCarReview(data?.feedback)
    //     }
    // }, [data])

    useEffect(() => {
        if (carData?.available && bookingData) {
            fetchApi(bookingUrl)
                .then(() => {
                    swal("Success!", "Booking Added Successfully!", "success");
                    navigate("/car-rental-frontend/")
                })
                .catch((error) => {
                    swal("Error!", "Couldn't Add Booking!", "error");
                })
        }
    }, [bookingData])

    useEffect(() => {
        if (review?.user_id_from) {
            fetchApi(feedbackUrl)
                .then(() => {
                    swal("Success!", "Feedback Added Successfully!", "success")
                    window.location.reload();
                })
                .catch((error) => {
                    swal("Error!", "Couldn't Add Feedback!", "error");
                })
        }
    }, [review])

    return (
        <>
            <Container sx={{ my: 10, height: "100vh" }}>
                {loading ? <div class="spinner-border" role="status" ></div> :
                    <>
                        <Grid container maxHeight="auto" padding={5} spacing={5} elevation={5} component={Paper}>
                            <Grid item md={6} xs={12} sx={{}}>
                                <Box sx={{}}>
                                    <img style={{ height: "40vh" }} class="img-fluid" alt="100%x280" src={`data:image/*;base64,${carData?.car_image}`} />
                                </Box>
                            </Grid>
                            <Grid item md={6} xs={12} sx={{}}>
                                <Box sx={{}}>
                                    <Typography
                                        component="h6"
                                        variant="h5"
                                        sx={{ color: 'gray' }}
                                    >
                                        {carData.car_name} {carData.car_category} {carData.car_model}
                                    </Typography>
                                    <Typography
                                        component="h6"
                                        variant="p"
                                        sx={{ color: 'teal', mb: 5 }}
                                    >
                                        {carData.car_location}
                                    </Typography>
                                    <Typography
                                        component="h6"
                                        variant="P"
                                        sx={{ color: 'gray', mb: 2 }}
                                    >
                                        {carData.car_description}
                                        {carData.car_description}
                                    </Typography>
                                    <Typography
                                        component="h6"
                                        variant="P"
                                        sx={{ color: 'red', mb: 2 }}
                                    >
                                        Rent: {carData.price} Rs/hr
                                    </Typography>
                                    {carData?.user_id === user?.user_id ? "" :
                                        <Modal btnText="Book Now" modalTitle="Confirm Your Booking" handleConfirm={confirmBooking} >
                                            <DialogContent>
                                                <DialogContentText>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere quasi laborum, tempora sit quam quod, unde saepe blanditiis similique praesentium odio deserunt consectetur nulla consequatur cupiditate incidunt enim earum?
                                                </DialogContentText>
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="hours"
                                                    label="Total Hours"
                                                    type="number"
                                                    fullWidth
                                                    variant="standard"
                                                    onChange={(e) => setHours(e.target.value)}
                                                />
                                                <TextField
                                                    autoFocus
                                                    margin="dense"
                                                    id="description"
                                                    label="Description"
                                                    type="text"
                                                    fullWidth
                                                    variant="standard"
                                                    onChange={(e) => setDescription(e.target.value)}
                                                />
                                            </DialogContent>
                                        </Modal>
                                    }
                                    {/* <ButtonComponent text={"Book Car"} variant={"contained"} size={"medium"} to={"/"} /> */}
                                </Box>
                            </Grid>
                        </Grid>
                        <Typography
                            component="h6"
                            variant="h5"
                            sx={{ color: 'gray', mt: 5 }}
                        >
                            Reviews
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(addReviewHandler)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                name="review"
                                label="Add Review"
                                type="text"
                                id="review"
                                {...register("review", { required: true })}
                            // sx={classes.textFieldStyles}

                            />
                            {errors.review?.type === 'required' && <p role="alert" className='text-danger'>*Review is required</p>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Submit Review
                            </Button>
                        </Box>
                        {loading ? <div class="spinner-border" role="status" ></div> :
                            result?.length ? result?.map((item, index) => (
                                <FeedbackItem data={item} />
                            ))
                                :
                                <h6 className='mt-3'>
                                    No Feedbacks To Show
                                </h6>
                        }
                    </>
                }
            </Container >
        </>
    );
}

export default CarDetails