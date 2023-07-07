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
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

const Forgetpassword = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
        }
    });
    const loginHandler = (data) => {
        console.log(data);
        navigate("/verifyCode")
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
                                Forgot Password
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(loginHandler)} sx={{ mt: 2 }}>
                                <TextField
                                  margin="normal"
                                  fullWidth
                                  id="email"
                                  label="Email Address"
                                  name="email"
                                  autoFocus
                                  {...register("email", { required: true })}
                                  className={errors.email?.type === 'required' ? 'error-input' : ''}
                                  style={{
                                      fontSize: '16px',
                                      height: '48px',
                                  }}

                                />
                                {errors.email?.type === 'required' && <p role="alert" className='text-danger'>*Email Address is required</p>}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Get Verification Code
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Forgetpassword;

