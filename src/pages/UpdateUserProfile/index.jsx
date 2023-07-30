import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, TextField, createStyles, Paper, Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from 'react-hook-form';
import { ButtonComponent } from '../../components';
import { useStateContext } from '../../Contexts/stateContext';
import useFetch from '../../Hooks/useFetch';

const UpdateUserProfile = () => {
    const navigate = useNavigate();
    const classes = createStyles({
        extraStyles: {
            width: '100%',
            maxWidth: 500,
            p: 1,
            mb: 2,
        },
    });
    const [credentials, setCredentials] = useState(null)
    const defaultTheme = createTheme();
    const { user } = useStateContext();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: user?.firstName,
            lastname: user?.lastName,
            phone: user?.phone,
        },
    });

    const url = {
        method: 'PUT',
        url: `user/${user?.user_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: credentials,
    };

    const { data, error, loading, fetchApi } = useFetch()

    const updateUserHandler = (data) => {
        setCredentials(data)
    };

    useEffect(() => {
        if (credentials) {
            fetchApi(url)
        }
    }, [credentials])

    useEffect(() => {
        if (data?.results.affectedRows === 1) {
            window.location.replace("/")
        }
    }, [data])


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 5,
                            mx: 10,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography component="h1" variant="h3" sx={{ color: 'red', fontWeight: 'semi-bold', mx: -8 }}>
                            Car Rental System
                        </Typography>

                        <Box component="form" onSubmit={handleSubmit(updateUserHandler)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                fullWidth
                                name="firstname"
                                label="First Name"
                                type="text"
                                id="firstname"
                                {...register('firstname', { required: true })}
                            />
                            {errors.firstname?.type === 'required' && <p role="alert" className='text-danger'>*First name is required</p>}
                            <TextField
                                margin="normal"
                                fullWidth
                                name="lastname"
                                label="Last Name"
                                type="text"
                                id="lastname"
                                {...register('lastname', { required: true })}
                            />
                            {errors.lastname?.type === 'required' && <p className='text-danger' role="alert">*Last name is required</p>}
                            <TextField
                                margin="normal"
                                fullWidth
                                name="phone"
                                label="Phone Number"
                                type="tel"
                                id="phone"
                                {...register('phone', { required: true })}
                            />
                            {errors.phone?.type === 'required' && <p role="alert" className='text-danger'>*Phone Number is required</p>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                            >
                                Update Profile
                            </Button>
                            {/* <ButtonComponent variant="contained" text="Update" btnType="submit" extraStyles={classes.extraStyles} /> */}

                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default UpdateUserProfile;
