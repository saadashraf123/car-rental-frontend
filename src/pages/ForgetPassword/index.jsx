import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  Link,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Forgetpassword = () => {
  const defaultTheme = createTheme();
  const [step, setStep] = useState(1);
  const [verificationCode, setVerificationCode] = useState('');

  const handleGetVerificationCode = (e) => {
    e.preventDefault();
    // TODO: Add code to send verification code to the entered email address
    setStep(2);
  };

  const handleVerifyCode = (e) => {
    e.preventDefault();
    // TODO: Add code to verify the entered verification code
    setStep(3);
  };

  const handleCreatePassword = (e) => {
    e.preventDefault();
    // TODO: Add code to handle password creation
  };

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
            <Typography
              component="h1"
              variant="h3"
              sx={{ color: 'red', fontWeight: 'semi-bold', mx: -8 }}
            >
              Car Rental System by munir
            </Typography>
            <br />
            <br />
            <br />
            {step === 1 && (
              <>
                <Typography component="h1" variant="h4">
                  Forgot Password
                </Typography>
                <Box component="form" onSubmit={handleGetVerificationCode} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoFocus
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Get Verification Code
                  </Button>
                </Box>
              </>
            )}
            {step === 2 && (
              <>
                <Typography component="h1" variant="h4">
                  Verify Code
                </Typography>
                <Box component="form" onSubmit={handleVerifyCode} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="verificationCode"
                    label="Verification Code"
                    name="verificationCode"
                    autoFocus
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Verify Code
                  </Button>
                </Box>
              </>
            )}
            {step === 3&& (
              <>
                <Typography component="h1" variant="h4">
                  Create New Password
                </Typography>
                <Box component="form" onSubmit={handleCreatePassword} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="password"
                    label="New Password"
                    name="password"
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    type="password"
                    id="confirmPassword"
                    label="Confirm Password"
                    name="confirmPassword"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Create Password
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default Forgetpassword;

