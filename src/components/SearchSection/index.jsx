import React, { useState, useEffect } from 'react'
import "./style.module.css"
import { Container, Grid, TextField, MenuItem, createStyles, Paper, Box, Button, Typography } from '@mui/material';
import ButtonComponent from '../Button';
import carData from '../../data/data.json'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';


const SearchSection = () => {

    const [data, setData] = useState(null)

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            car_name: "",
            car_category: "",
            car_model: "",
            car_location: ""
        }
    });
    const navigate = useNavigate()
    const submitHandler = (result) => {
        setData(result);
        navigate("/search", { state: result })
    }

    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: '200',
            maxWidth: '200px',
            fontWeight: "bold",
            mt: 2,
            mr: 1,
            p: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
        textInputStyles: {
            width: 400,
            my: 2
        }
    });
    const carComapnyList = carData.carsComapny;
    const carCategoryList = carData.carsCategory;
    return (
        <Container sx={{ mx: 'auto' }} id="search" component={Paper} elevation={6}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }} container spacing={0} alignItems="center"
                component="form"
                onSubmit={handleSubmit(submitHandler)}
            >
                <Typography component="h4" variant="h4" sx={{ color: "#DC3545", fontWeight: "semi-bold", mt: 3 }}>
                    Search For Your Favorite Car
                </Typography>
                <Grid item container
                    direction="row"
                    justifyContent="space-evenly"
                >
                    <TextField
                        label="Car Name"
                        variant="outlined"
                        id='car_name'
                        name='car_name'
                        select
                        sx={classes.textInputStyles}
                        {...register("car_name", { required: true })}
                    >
                        {carComapnyList.map((item, index) => (
                            <MenuItem value={item}>{item}</MenuItem>
                        ))}
                    </TextField>
                    {errors.car_name?.type === 'required' && <p role="alert" className='text-danger'>*Car Name is required</p>}
                    <TextField
                        label="Car Category"
                        variant="outlined"
                        select
                        id='car_category'
                        name='car_category'
                        {...register("car_category", { required: true })}
                        sx={classes.textInputStyles}
                    >
                        {carCategoryList.map((item, index) => (
                            <MenuItem value={item}>{item}</MenuItem>
                        ))}
                    </TextField>
                    {errors.car_category?.type === 'required' && <p role="alert" className='text-danger'>*Car Category is required</p>}

                </Grid>
                <Grid item container
                    direction="row"
                    justifyContent="space-evenly"
                >
                    <TextField
                        label="Car Model"
                        variant="outlined"
                        type="number"
                        id='car_model'
                        name='car_model'
                        {...register("car_model", { required: true })}
                        sx={classes.textInputStyles}
                    >
                    </TextField>
                    {errors.car_model?.type === 'required' && <p role="alert" className='text-danger'>*Car Model is required</p>}
                    <TextField
                        // type="date"
                        label="Enter Location"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        id='car_location'
                        name='car_location'
                        {...register("car_location", { required: true })}
                        sx={classes.textInputStyles}
                    />
                    {errors.car_location?.type === 'required' && <p role="alert" className='text-danger'>*Car Location is required</p>}
                </Grid>
                <Grid
                    sx={{
                        my: 2,
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                    >
                        Search Car
                    </Button>
                </Grid>
            </Box>
        </Container >
    )
}

export default SearchSection