import React from 'react'
import "./style.module.css"
import { Grid, TextField, Button, Link, Paper, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Signup = () => {
    const defaultTheme = createTheme();

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
                            Sign in
                        </Typography>
                        <Box component="form" onSubmit={""} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="firstname"
                                label="First Name"
                                type="text"
                                id="lastname"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="lastname"
                                label="Last Name"
                                type="text"
                                id="lastname"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                            />
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
                                Sign Up
                            </Button>
                            <Grid container>
                                <Grid item>
                                    <Link href="/login" variant="body2">
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