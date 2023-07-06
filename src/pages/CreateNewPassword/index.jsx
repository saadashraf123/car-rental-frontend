import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const CreateNewPassword = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            confirmPassword: '',
            password: ''
        }
    });
    const loginHandler = (data) => {
        console.log(data);
        navigate("/login")

    }

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginTop: '104px' }} container component="main" sx={{ height: '100vh', justifyContent: 'center' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={6} square sx={{ p: 4 }}>
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
                                Car Rental System
                            </Typography>

                            <Typography component="h1" variant="h6">
                                Create New Password
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(loginHandler)} sx={{ mt: 2 }}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                    id="password"
                                    label="New Password"
                                    name="password"
                                    autoFocus
                                    {...register("password", { required: true })}
                                />
                                {errors.password?.type === 'required' && <p role="alert" className='text-danger'>*Password is required</p>}

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                    id="confirmPassword"
                                    label="Confirm Password"
                                    name="confirmPassword"
                                    {...register("confirmPassword", { required: true })}
                                />
                                {errors.confirmPassword?.type === 'required' && <p role="alert" className='text-danger'>*Confirm Password is required</p>}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Create Password
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default CreateNewPassword;

