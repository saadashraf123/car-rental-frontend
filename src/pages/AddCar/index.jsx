import React, { useEffect, useState } from 'react'
import "./style.module.css"
import { Grid, TextField, createStyles, Paper, Typography, Box, Button, Input, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import carsData from '../../data/data.json'
import useFetch from '../../Hooks/useFetch';
import { useStateContext } from "../../Contexts/stateContext";
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';


const AddCar = () => {

    const [images, setImages] = useState("")
    const defaultTheme = createTheme();
    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: "100%",
            maxWidth: 300,
            fontWeight: "bold",
            my: 2,
            mr: 1,
            p: 1,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
        textFieldStyles: {
            mb: 2,
            '& label.Mui-focused': {
                color: '#DC3545',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#DC3545',
            },
            '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                    borderColor: '#DC3545',
                    borderWidth: '0.15rem',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#DC3545',
                },
            }
        },
        boxStyles: {
            display: "flex",
            flex: 1,
            width: 0
        }
    });
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            car_image: images,
            car_name: "",
            car_model: "",
            car_category: "",
            car_location: "",
            price: null,
            car_description: ""
        }
    });
    const [carData, setCarData] = useState(null)

    const url = {
        method: 'POST',
        url: `cars`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: carData && carData,
    };
    const { data, error, loading, fetchApi } = useFetch()

    const { user } = useStateContext();
    const addCarHandler = (data) => {
        const formData = new FormData();
        formData.append('car_image', images); // 'car_image' should match the name attribute of the file input

        // Append other form data fields to the formData object
        formData.append('car_name', data.car_name);
        formData.append('car_model', data.car_model);
        formData.append('car_category', data.car_category);
        formData.append('car_location', data.car_location);
        formData.append('price', data.price);
        formData.append('car_description', data.car_description);
        formData.append('user_id', user?.user_id);

        setCarData(formData)
    }
    const navigate = useNavigate();
    useEffect(() => {
        if (carData) {
            fetchApi(url)
                .then(() => {
                    swal("Good job!", "Car Added Successfully!", "success");
                    navigate("/car-rental-frontend/")
                })
                .catch(() => {
                    swal("Something Went Wrong!", "Couldn't add the Car!", "error");
                })
        }
    }, [carData])


    const carComapnyList = carsData.carsComapny;
    const carCategoryList = carsData.carsCategory;

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid component={Paper} elevation={12} square sx={{ maxHeight: '500vh', justifyContent: 'center', my: 2, p: 4 }}>
                <Box
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'red', fontWeight: 'bold' }}
                    >
                        Add A Car
                    </Typography>
                    <Box sx={{ m: 1 }} display="flex" flexDirection="column" alignItems="center">
                        {images && (
                            <img style={{ width: "60%", maxHeight: "300px", marginBottom: "5px" }} src={URL.createObjectURL(images)} alt="" />
                        )}
                    </Box>
                    <Box component="form" enctype="multipart/form-data" onSubmit={handleSubmit(addCarHandler)} sx={{ mt: 2 }}>
                        <Input
                            fullWidth
                            id="car_image"
                            label="Car Pictures"
                            name="car_image"
                            {...register("car_image", { required: true })}
                            type='file'
                            inputProps={{
                                accept: 'image/*'
                                // , multiple: true
                            }}
                            // onChange={uploadMultipleFiles}
                            onChange={(e) => setImages(e.target.files[0])}
                        />
                        {errors.car_image?.type === 'required' && <p role="alert" className='text-danger'>*Car Image is required</p>}
                        <TextField
                            fullWidth
                            id="car_name"
                            label="Car Name"
                            name="car_name"
                            variant="outlined"
                            select
                            {...register("car_name", { required: true })}
                            sx={[classes.textFieldStyles, { mt: 2 }]}
                        >
                            {carComapnyList.map((item, index) => (
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </TextField>
                        {errors.car_name?.type === 'required' && <p role="alert" className='text-danger'>*Car Name is required</p>}
                        <TextField
                            fullWidth
                            id="car_category"
                            label="Car Category"
                            name="car_category"
                            variant="outlined"
                            select
                            {...register("car_category", { required: true })}
                            sx={classes.textFieldStyles}
                        >
                            {carCategoryList.map((item, index) => (
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </TextField>
                        {errors.car_category?.type === 'required' && <p role="alert" className='text-danger'>*Car Category is required</p>}
                        <TextField
                            fullWidth
                            id="car_model"
                            label="Model"
                            name="car_model"
                            {...register("car_model", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.car_model?.type === 'required' && <p role="alert" className='text-danger'>*Car Model is required</p>}
                        <TextField
                            fullWidth
                            id="car_location"
                            label="Location"
                            name="car_location"
                            {...register("car_location", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.car_location?.type === 'required' && <p role="alert" className='text-danger'>*Car Location is required</p>}

                        <TextField
                            type='number'
                            fullWidth
                            id="price"
                            label="Price Per Hour"
                            name="price"
                            {...register("price", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.price?.type === 'required' && <p role="alert" className='text-danger'>*Car Price is required</p>}
                        <TextField
                            fullWidth
                            id="car_description"
                            label="Description"
                            name="car_description"
                            {...register("car_description", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.car_description?.type === 'required' && <p role="alert" className='text-danger'>*Car Description is required</p>}
                        <Button
                            type="submit"
                            variant="contained"
                            sx={classes.ButtonStyles}
                        >
                            Add A Car
                        </Button>
                    </Box>
                </Box>
            </Grid>
        </ThemeProvider >
    );
};
export default AddCar
