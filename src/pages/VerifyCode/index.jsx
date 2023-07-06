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


const VerifyCode = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            code: '',
        }
    });
    const loginHandler = (data) => {
        console.log(data);
        navigate("/createNewPassword")

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
                                Verify Code
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(loginHandler)} sx={{ mt: 2 }}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="verificationCode"
                                    label="Verification Code"
                                    name="verificationCode"
                                    autoFocus
                                    {...register("code", { required: true })}
                                />
                                {errors.code?.type === 'required' && <p role="alert" className='text-danger'>*Verification Code is required</p>}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                >
                                    Verify Code
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default VerifyCode;

