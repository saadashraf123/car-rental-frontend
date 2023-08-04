import React, { useEffect, useState } from 'react';
import {
    Grid,
    TextField,
    Button,
    Paper,
    Typography,
    Box,
} from '@mui/material';
import { createTheme, ThemeProvider, createStyles } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useFetch from '../../Hooks/useFetch';
import swal from 'sweetalert';


const CreateNewPassword = () => {

    const params = useParams();
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
            confirmPassword: '',
            password: ''
        }
    });
    const [credentials, setCredentials] = useState(null)
    const { data, fetchApi } = useFetch();
    const url = {
        method: 'POST',
        url: `user/updatePassword`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Authorization': `Bearer ${params.token}`
        },
        data: { password: credentials?.password }
    };
    const createPassHandler = (data) => {
        if (data.password === data.confirmPassword) {
            setCredentials(data)
        }
        else {
            swal("Error", "Password and Confirm Password Must Be Same", "error")
        }

    }

    useEffect(() => {
        fetchApi(url)
            .then(() => {
                swal({
                    title: "Password Reset Successfully!",
                    icon: "success",
                    buttons: {
                        confirm: {
                            text: "OK",
                            value: true,
                            visible: true,
                        },
                    },
                }).then((value) => {
                    if (value) {
                        // navigate("/login")
                    }
                })
            })
    }, [credentials])


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginTop: '104px' }} container component="main" sx={{ height: '100vh', justifyContent: 'center' }}>
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
                                Create New Password
                            </Typography>
                            <Box component="form" onSubmit={handleSubmit(createPassHandler)} sx={{ mt: 2 }}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                    id="password"
                                    label="New Password"
                                    name="password"
                                    autoFocus
                                    {...register("password", { required: true })}
                                    sx={classes.textFieldStyles}
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
                                    sx={classes.textFieldStyles}
                                />
                                {errors.confirmPassword?.type === 'required' && <p role="alert" className='text-danger'>*Confirm Password is required</p>}

                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
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

