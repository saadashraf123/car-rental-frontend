import React, { useEffect, useState } from 'react'
import "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { Grid, TextField, createStyles, Paper, Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import useFetch from '../../Hooks/useFetch';
import { BsDatabaseDown } from 'react-icons/bs';



const Signup = () => {

    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: '100%',
            maxWidth: 500,
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
    });
    const defaultTheme = createTheme();
    const [credentials, setCredentials] = useState(null)
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            firstname: '',
            lastname: '',
            email: '',
            phone: "",
            password: ''
        }
    }
    );


    const url = {
        method: 'POST',
        url: `user`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
        data: credentials,
    };

    const { data, error, loading, fetchApi } = useFetch()

    const signupHandler = (data) => {
        setCredentials(data)
    }
    useEffect(() => {
        if (credentials) {
            fetchApi(url)
        }
    }, [credentials])

    useEffect(() => {
        if (data?.user.affectedRows == 1) {
            navigate("/car-rental-frontend/")
        }
    }, [data])


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?cars)',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
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
                        <Typography component="h1" variant="h3" sx={{ color: "red", fontWeight: "semi-bold", mx: -8 }}>
                            Car Rental System
                        </Typography>
                        <Typography component="h1" variant="h4">
                            Sign Up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(signupHandler)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                name="firstname"
                                label="First Name"
                                type="text"
                                id="firstname"
                                {...register("firstname", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.firstname?.type === 'required' && <p role="alert" className='text-danger'>*First name is required</p>}
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                name="lastname"
                                label="Last Name"
                                type="text"
                                id="lastname"
                                {...register("lastname", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.lastname?.type === 'required' && <p className='text-danger' role="alert">*Last name is required</p>}
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                {...register("email", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.email?.type === 'required' && <p role="alert" className='text-danger'>*Email Address is required</p>}
                            <TextField
                                margin="normal"
                                type='number'
                                placeholder='03xxxxxxxxx'
                                // required
                                fullWidth
                                id="phone"
                                label="Phone Number"
                                name="phone"
                                {...register("phone", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.email?.type === 'required' && <p role="alert" className='text-danger'>*Phone Number is required</p>}
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                                sx={classes.textFieldStyles}
                            />
                            {errors.password?.type === 'required' && <p role="alert" className='text-danger'>*Password is required</p>}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                            >
                                Sign Up
                            </Button>
                            {/* <ButtonComponent variant={"contained"} text={"Sign up"} btnType={"submit"} extraStyles={classes.extraStyles} /> */}
                            <Grid container>
                                <Grid item>
                                    <Link to="/login" variant="body2">
                                        {"Already have an account? Sign In"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Signup