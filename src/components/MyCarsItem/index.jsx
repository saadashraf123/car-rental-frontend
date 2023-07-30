import React, { useEffect, useState } from 'react'
import "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { Typography, Paper, Grid, Button, createStyles, Box, DialogContentText, DialogContent, TextField } from '@mui/material'
import { BsToggleOn, BsToggleOff, BsDatabaseDash } from 'react-icons/bs';
import useFetch from '../../Hooks/useFetch';
import Modal from "../Modal/Modal";
import { useStateContext } from '../../Contexts/stateContext';
import { useForm } from 'react-hook-form';


const MyCarsItem = ({ carData }) => {
    const [available, setAvailable] = useState(true)
    const [password, setPassword] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            password: ""
        }
    });
    const { user } = useStateContext()
    const navigate = useNavigate();
    const classes = createStyles({
        ButtonStyles:
        {
            width: 150,
            backgroundColor: "#DC3545",
            color: "white",
            fontWeight: "bold",
            mt: 2,
            ml: 10,
            p: 1,
            mb: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
    });
    const [request, setRequest] = useState("")
    const deleteUrl = {
        method: "DELETE",
        url: `cars/${carData?.car_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }

    const updateUrl = {
        method: "PUT",
        url: `cars/${carData?.car_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: { available: available }
    }

    const { data, error, loading, fetchApi } = useFetch();

    const availableToggle = () => {
        setAvailable(!available)
    }
    const handleDeleteCar = () => {
        setRequest("DELETE");
    }

    useEffect(() => {
        if (request === "DELETE") {
            fetchApi(deleteUrl)
            if (data?.results?.affectedRows == 1) {
                alert("Car deleted Succesfully")
                navigate("/")
            }
        }
    }, [request])

    useEffect(() => {
        fetchApi(updateUrl)
        if (data?.results?.affectedRows == 1) {
            alert("Car Updated Succesfully")
            // window.location.reload()
            navigate("/")
        }
    }, [available])

    return (
        <Grid container sx={{ height: '100%', my: 3, justifyContent: 'center' }}>
            <Paper elevation={6} square sx={{ p: 4, width: "90%", display: "flex" }}>
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img style={{ height: "40vh" }} class="img-fluid" alt="100%x280" src={`data:image/*;base64,${carData.car_image}`} />
                    </div>
                </div>
                <Grid>
                    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                        <Modal icon={true} modalTitle="Are you Sure, you want to delete car" handleConfirm={handleSubmit(handleDeleteCar)} >
                            <DialogContent>
                                <DialogContentText>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat facere quasi laborum, tempora sit quam quod, unde saepe blanditiis similique praesentium odio deserunt consectetur nulla consequatur cupiditate incidunt enim earum?
                                </DialogContentText>
                            </DialogContent>
                        </Modal>
                        <Button onClick={availableToggle} style={{ fontSize: "32px" }}>
                            {carData.available ? <BsToggleOn style={{ color: "green" }} /> : <BsToggleOff style={{ color: "gray" }} />}
                        </Button>
                    </Box>
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'black', fontWeight: 'bold', marginLeft: 10, marginTop: 2 }}
                    >
                        {carData.car_name}
                    </Typography>

                    <Typography
                        component="h6"
                        variant="P"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        {carData.car_location}
                    </Typography>
                    <Typography
                        component="p"
                        variant="body2"
                        sx={{ color: 'gray', marginLeft: 10, marginTop: 3 }}
                    >
                        {carData.car_description}
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                        component={Link}
                        to={"/details"}
                        state={carData}
                    >
                        View
                    </Button>
                </Grid>
            </Paper >
        </Grid >
    )
}

export default MyCarsItem