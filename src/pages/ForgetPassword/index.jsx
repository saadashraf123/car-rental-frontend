import React, { useEffect, useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Box,
} from '@mui/material';
import { createStyles, createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch';

const Forgetpassword = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();

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

    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            email: '',
        }
    });
    const [credentials, setCredentials] = useState(null)
    const loginHandler = (data) => {
        setCredentials(data)
    }
    const { data, error, loading, fetchApi } = useFetch()

    const url = {
        method: 'POST',
        url: `auth/reset-password`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: credentials,
    };

    useEffect(() => {
        if (credentials) {
            fetchApi(url)
                .then(() => {
                    alert("Email Sent Successfully")
                    navigate("/login")
                })
        }
    }, [credentials])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginTop: '100px' }} container sx={{ height: '100%', justifyContent: 'center' }}>
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
                            Forgot Password
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(loginHandler)} sx={{ mt: 2 }}>
                            <TextField
                                // margin="normal"
                                // fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                                {...register("email", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.email?.type === 'required' && <Typography role="alert" className='text-danger'>*Email Address is required</Typography>}
                            <Button
                                type="submit"
                                // fullWidth
                                variant="contained"
                                sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                            >
                                Get Verification Link
                            </Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    );
};

export default Forgetpassword;

