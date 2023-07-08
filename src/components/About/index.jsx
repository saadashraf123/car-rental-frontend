import React from "react";
import { Grid, Typography, Box, Container } from '@mui/material';

const About = () => {
  const typographyStyles = {
    color: "#000",
    opacity: "0.8",
    marginBottom: "10px",
    fontFamily: "sans serif",
    letterSpacing: "2px",
    textAlign: "center",
  };

  const whyChooseStyles = {
    display: "block",
    lineHeight: "8.5",
    margin: "10px auto",
    textAlign: "center",
  };

  return (
    <div id="contact" className="contact">
      <div style={{ marginTop: '50px' }}></div>

      <Typography align='center' sx={typographyStyles} variant='h5'>About<b> Us </b></Typography>
      <hr style={{ background: "#cc1836", margin: "0px 40% 5% 40%" }}></hr>
      <Container style={{ backgroundColor: 'white', marginBottom: '80px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', borderRadius: '5px' }} maxWidth="lg" >
        <Grid container spacing={2}>
          <Grid item md={5} xs={10} sx={{ justifyContent: "center" }}>
            <Box sx={{ opacity: "1", textAlign: "center" }}>
              <h2 style={{ color: 'red' }}>How It Works</h2>
              <p style={{ color: '#808080', textAlign: 'left', marginTop: '5px' }}>
                Renting out your car is simple and convenient:
                <br />
                <br />
                  Create an account on our website.
                <br />
                  Add your car details, including make, model, year, and any other relevant information.
                <br />
                  Set the availability and rental terms for your car.
                <br />
                  Interested renters can browse available cars and submit rental requests.
                <br />
                  You review the rental requests and decide whether to accept or decline.
                <br />
                  Once a rental request is accepted, coordinate with the renter for car pickup.
                <br />
                  Enjoy the extra income while your car is being rented out!
                <br />
                  After the rental period, inspect your car and receive it back.
                <br />
                  Leave a review for the renter and get ready for more rental opportunities.
              </p>
            </Box>
          </Grid>
          <span id="divider"></span>
          <Grid item md={5} xs={10} sx={{ justifyContent: "flex-end" }}>
            <Box sx={{ opacity: "1", textAlign: "left" }}>
              <h2 style={{ color: 'red' }}>Why Choose Us</h2>
              <p style={{ color: '#808080', marginTop: '5px' }}>
                Here are some reasons to choose our platform for renting out your car:
                <br />
                <br />
                  Easy and user friendly interface for car owners.
                <br />
                  Secure and reliable platform to connect with potential renters.
                <br />
                  Flexible rental terms and pricing options.
                <br />
                  Wide reach and exposure to a large number of potential renters.
                <br />
                  Transparent communication and feedback system.
                <br />
                  Dedicated customer support to assist you throughout the process.
              </p>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default About;
