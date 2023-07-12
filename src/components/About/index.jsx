import React from "react";
import { Grid, Typography, Box, Container, List, ListSubheader, ListItem } from '@mui/material';
import styles from './style.module.css'

const About = () => {
    const typographyStyles = {
        color: "#000",
        opacity: "0.8",
        marginBottom: "10px",
        fontFamily: "sans serif",
        letterSpacing: "2px",
        textAlign: "center",
    };
    return (
        <div id="about" className="about mt-5">
            <Typography align='center' sx={[typographyStyles, { fontFamily: "sans-serif", opacity: "1" }]} variant='h5'>About<b className='bold'> Us</b></Typography>
            <hr style={{ background: "#cc1836", margin: "0px 40% 5% 40%" }}></hr>
            <Container style={{ backgroundColor: 'white', marginBottom: '80px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', borderRadius: '5px' }} maxWidth="lg" >
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12} sx={{ justifyContent: "center" }}>
                        <Box sx={{ textAlign: "center", py: 2 }}>
                            <List className={styles.list} sx={{ color: '#808080', lineHeight: 1 }}>
                                <ListSubheader sx={{
                                    fontWeight: "bold", lineHeight: '24px', fontSize: '26px', color: '#DC3545', mb: 2
                                }}
                                >
                                    How It Works
                                </ListSubheader>
                                <ListItem sx={{ fontWeight: 600 }}>Renting out your car is simple and convenient:</ListItem>
                                <ListItem>Create an account on our website.</ListItem>
                                <ListItem>Add your car details, including make, model, year, and any other relevant information.</ListItem>
                                <ListItem>Set the availability and rental terms for your car.</ListItem>
                                <ListItem>Interested renters can browse available cars and submit rental requests.</ListItem>
                                <ListItem>You review the rental requests and decide whether to accept or decline.</ListItem>
                                <ListItem>Once a rental request is accepted, coordinate with the renter for car pickup.</ListItem>
                                <ListItem>Enjoy the extra income while your car is being rented out!</ListItem>
                                <ListItem>After the rental period, inspect your car and receive it back.</ListItem>
                                <ListItem>Leave a review for the renter and get ready for more rental opportunities.</ListItem>
                            </List>
                        </Box>
                    </Grid>
                    {/* <span className="border-end border-danger "></span> */}
                    <Grid item md={6} xs={12} sx={{ justifyContent: "center" }}>
                        <Box sx={{ textAlign: "center", py: 2 }}>
                            <List className={styles.list} sx={{ color: '#808080', lineHeight: 1 }}>
                                <ListSubheader sx={{
                                    fontWeight: "bold", lineHeight: '24px', fontSize: '26px', color: '#DC3545', mb: 2
                                }}
                                >
                                    Why Choose Us
                                </ListSubheader>
                                <ListItem sx={{ fontWeight: 600 }}>Here are some reasons to choose our platform for renting out your car:</ListItem>
                                <ListItem>Easy and user friendly interface for car owners.</ListItem>
                                <ListItem>Secure and reliable platform to connect with potential renters.</ListItem>
                                <ListItem>Flexible rental terms and pricing options.</ListItem>
                                <ListItem> Wide reach and exposure to a large number of potential renters.</ListItem>
                                <ListItem>Transparent communication and feedback system.</ListItem>
                                <ListItem>Dedicated customer support to assist you throughout the process.</ListItem>
                            </List>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default About;
