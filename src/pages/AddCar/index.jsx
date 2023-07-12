import React, { useState } from 'react'
import "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { Grid, TextField, createStyles, Paper, Typography, Box, Button, Input } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";

const AddCar = () => {

    const [file, setFile] = useState(null)
    const defaultTheme = createTheme();
    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: "100%",
            maxWidth: "100%",
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
        }
    });
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            file: "",
            name: "",
            variant: "",
            model: "",
            location: "",
            price: 0,
            description: ""
        }
    });
    const addCarHandler = (data) => {
        console.log(data);
    }

    console.log(file);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginx: '20px' }} container component="main" sx={{ maxHeight: '100vh', justifyContent: 'center', my: 2 }}>
                <Paper elevation={12} square sx={{ p: 4 }}>
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
                            Add A Car
                        </Typography>
                        <Box sx={{ m: 1 }} display="flex" flexDirection="column">
                            {file && (
                                Object.entries(file)?.map((index, item) => (
                                    <img style={{ width: "100%", maxHeight: "300px", marginBottom: "5px" }} className="writeImg" src={URL.createObjectURL(index[1])} alt="" />
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
                                onChange={(e) => setFile(e.target.files)}
                            />
                            {errors.file?.type === 'required' && <p role="alert" className='text-danger'>*Car Image is required</p>}
                            <TextField
                                fullWidth
                                id="carName"
                                label="Car Name"
                                name="name"
                                {...register("name", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.name?.type === 'required' && <p role="alert" className='text-danger'>*Car Name is required</p>}
                            <TextField
                                fullWidth
                                id="variant"
                                label="Variant"
                                name="variant"
                                {...register("variant", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.variant?.type === 'required' && <p role="alert" className='text-danger'>*Car Variant is required</p>}

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
                </Paper>
            </Grid>
        </ThemeProvider >
    );
};
export default AddCar
