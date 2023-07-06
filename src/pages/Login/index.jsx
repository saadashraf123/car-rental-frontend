import React from 'react'
import "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { Grid, TextField, createStyles, Paper, Typography, Box, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { ButtonComponent } from '../../components';


const Login = () => {
    const defaultTheme = createTheme();
    const navigate = useNavigate();
    const classes = createStyles({
        extraStyles:
        {
            width: "100%",
            maxWidth: 500,
            p: 1,
            mb: 2
        },
        textFieldStyles: {
            '& label': {
                color: '#DC3545',
            },
            '& label.Mui-focused': {
                color: '#DC3545',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#DC3545',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#DC3545',
                },
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
            email: '',
            password: ''
        }
    });
    const loginHandler = (data) => {
        console.log(data);
    }


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
                            mt: 15,
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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(loginHandler)} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                {...register("email", { required: true })}
                                // autoFocus
                                sx={classes.textFieldStyles}
                            />
                            {errors.email?.type === 'required' && <p role="alert" className='text-danger'>*Email Address is required</p>}
                            <TextField
                                margin="normal"
                                // required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                {...register("password", { required: true })}
                            />
                            {errors.password?.type === 'required' && <p role="alert" className='text-danger'>*Password is required</p>}
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            {/* <ButtonComponent variant={"contained"} text={"Sign In"} btnType={"submit"} extraStyles={classes.extraStyles} /> */}
                            <Grid container>
                                <Grid item xs>
                                    <Link to="/forgetpassword" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider >
    )
}
export default Login