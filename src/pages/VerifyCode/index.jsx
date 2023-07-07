import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider, createStyles } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";


const VerifyCode = () => {
    const defaultTheme = createTheme();
    const classes = createStyles({
        ButtonStyles:
        {
            width: 420,
            backgroundColor: "#DC3545",
            color: "white",
            fontWeight: "bold",
            mt: 2,
            mr: 1,
            p: 1,
            mb: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
        textFieldStyles: {
            width: 420,
            // '& label': {
            //     color: '#DC3545',
            // },
            '& label.Mui-focused': {
                color: '#DC3545',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#DC3545',
            },
            '& .MuiOutlinedInput-root': {
                // '& fieldset': {
                //     borderColor: '#DC3545',
                // },
                '&:hover fieldset': {
                    borderColor: '#DC3545',
                    borderWidth: '0.15rem',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#DC3545',
                },
            }
        }
    })
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
            <Grid style={{ marginTop: '104px' }} container component="main" sx={{ height: '100%', justifyContent: 'center' }}>
                <Grid item xs={12} sm={6} md={4}>
                    <Paper elevation={6} square sx={{ p: 4, width: "500px" }}>
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
                                    sx={classes.textFieldStyles}
                                />
                                {errors.code?.type === 'required' && <p role="alert" className='text-danger'>*Verification Code is required</p>}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
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

