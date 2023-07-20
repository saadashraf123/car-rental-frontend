import React, { useState } from 'react'
import "./style.module.css"
import { Grid, TextField, createStyles, Paper, Typography, Box, Button, Input, MenuItem } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import carData from '../../data/data.json'

const AddCar = () => {

    const [images, setImages] = useState(null)
    const defaultTheme = createTheme();
    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: "100%",
            maxWidth: 500,
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
    const data = carData.carsComapny
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            file: images,
            name: "",
            model: "",
            category: "",
            location: "",
            price: null,
            description: ""
        }
    });
    const addCarHandler = (data) => {
        console.log(data);
    }


    const MAX_LENGTH = 3;

    const uploadMultipleFiles = (e) => {
        if (Array.from(e.target.files).length > MAX_LENGTH) {
            e.preventDefault();
            alert(`Cannot upload files more than ${MAX_LENGTH}`);
            reset({ file: null })
            return setImages(null)
        }
        else {
            return setImages(e.target.files)

        }
    }

    const carComapnyList = carData.carsComapny;
    const carCategoryList = carData.carsCategory;

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid component={Paper} elevation={12} square sx={{ maxHeight: '500vh', justifyContent: 'center', my: 2, p: 4 }}>
                <Box
                    sx={{
                        alignItems: 'center',
                        // maxWidth: "200vh"
                    }}
                >
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'red', fontWeight: 'bold' }}
                    >
                        Add A Car
                    </Typography>
                    <Box sx={[{ m: 1 }, classes.boxStyles]} >
                        {images && (
                            Object.entries(images)?.map((index, item) => (
                                <img style={{ maxHeight: "300px", marginBottom: "5px", flex: 0 }} className="writeImg" src={URL.createObjectURL(index[1])} alt="" />
                            ))
                        )}
                    </Box>
                    <Box component="form" onSubmit={handleSubmit(addCarHandler)} sx={{ mt: 2 }}>
                        <Input
                            fullWidth
                            id="file"
                            label="Car Pictures"
                            name="file"
                            {...register("file", { required: true })}
                            type='file'
                            inputProps={{ accept: 'image/*', multiple: true }}
                            onChange={uploadMultipleFiles}
                        />
                        {errors.file?.type === 'required' && <p role="alert" className='text-danger'>*Car Image is required</p>}
                        <TextField
                            fullWidth
                            id="carName"
                            label="Car Name"
                            name="name"
                            variant="outlined"
                            select
                            {...register("name", { required: true })}
                            sx={[classes.textFieldStyles, { mt: 2 }]}
                        >
                            {carComapnyList.map((item, index) => (
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </TextField>
                        {errors.name?.type === 'required' && <p role="alert" className='text-danger'>*Car Name is required</p>}
                        <TextField
                            fullWidth
                            id="carCategory"
                            label="Car Category"
                            name="category"
                            variant="outlined"
                            select
                            {...register("category", { required: true })}
                            sx={classes.textFieldStyles}
                        >
                            {carCategoryList.map((item, index) => (
                                <MenuItem value={item}>{item}</MenuItem>
                            ))}
                        </TextField>
                        {errors.category?.type === 'required' && <p role="alert" className='text-danger'>*Car Category is required</p>}
                        <TextField
                            fullWidth
                            id="model"
                            label="Model"
                            name="model"
                            {...register("model", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.model?.type === 'required' && <p role="alert" className='text-danger'>*Car Model is required</p>}
                        <TextField
                            fullWidth
                            id="location"
                            label="Location"
                            name="location"
                            {...register("location", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.location?.type === 'required' && <p role="alert" className='text-danger'>*Car Location is required</p>}

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
                            id="description"
                            label="Description"
                            name="description"
                            {...register("description", { required: true })}
                            sx={classes.textFieldStyles}
                        />
                        {errors.description?.type === 'required' && <p role="alert" className='text-danger'>*Car Description is required</p>}
                        <Button
                            type="submit"
                            fullWidth
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
