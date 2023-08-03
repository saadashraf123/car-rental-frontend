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
import { useStateContext } from '../../Contexts/stateContext';


const UpdatePassword = () => {

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
            currentPass: '',
            password: '',
            confirmPass: ''
        }
    });
    const [credentials, setCredentials] = useState(null)
    const { data, fetchApi } = useFetch();
    const { user } = useStateContext();
    const url = {
        method: 'POST',
        url: `user/verify/${user?.user_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: { password: credentials?.currentPass }
    };

    const updateUrl = {
        method: 'PATCH',
        url: `user/${user?.user_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: { password: credentials?.password }
    };
    const updateHandler = (data) => {
        setCredentials(data)
    }

    useEffect(() => {
        fetchApi(url)
    }, [credentials])


    useEffect(() => {
        if (data?.flag === 1) {
            if (credentials.password === credentials.confirmPass) {
                fetchApi(updateUrl)
                alert("Password Updated Successfully")
                navigate("/car-rental-frontend/")
            }
            else {
                alert("New Password and Confirm New Password Must be Same")
            }
        }
    }, [data])



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
                            <Box component="form" onSubmit={handleSubmit(updateHandler)} sx={{ mt: 2 }}>
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                    id="password"
                                    label="Current Password"
                                    name="currentPass"
                                    autoFocus
                                    {...register("currentPass", { required: true })}
                                    sx={classes.textFieldStyles}
                                />
                                {errors.password?.type === 'required' && <p role="alert" className='text-danger'>*Password is required</p>}

                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                    id="password"
                                    label="New Password"
                                    name="password"
                                    {...register("password", { required: true })}
                                    sx={classes.textFieldStyles}
                                />
                                {errors.password?.type === 'required' && <p role="alert" className='text-danger'>*New Password is required</p>}
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    type="password"
                                    id="confirmPass"
                                    label="Confirm New Password"
                                    name="confirmPass"
                                    {...register("confirmPass", { required: true })}
                                    sx={classes.textFieldStyles}
                                />
                                {errors.confirmPass?.type === 'required' && <p role="alert" className='text-danger'>*Confirm New Password is required</p>}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                                >
                                    Update Password
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default UpdatePassword;

