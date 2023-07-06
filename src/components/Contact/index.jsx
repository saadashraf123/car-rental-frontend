import React, { useState } from "react";
import { Grid, ListItem, Typography, Box, TextField, Button, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [isHovered, setIsHovered] = useState(false);





    const typographyStyles = {
        color: "#000",
        opacity: "0.8",
        marginBottom: "10px",
        fontFamily: "sans-serif",
        letterSpacing: "2px",
        alignText: "center",
        
    }
    const textFieldStyles = {
        '& .MuiTextField-root': { m: 2, width: '100%', maxWidth: "100%", backgroundColor: "white", borderRadius: "3%", outline: "none", fontFamily: "sans-serif", margin: "2% 0" },
        "& label, label.Mui-focused": {
            color: "#661f2b",
        },
        "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
                borderColor: "#DC3545"
            },
            '&:hover fieldset': {
                borderColor: '#DC3545',
            },
        },
    }
    const btnStyles = {
        margin: "15px 3% 0px 3%",
        padding: "10px 20px",
        color: isHovered ? "red" : "white",
        backgroundColor: "red",
        boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.2)", // Add boxShadow for a shadow effect
        borderRadius: "5px", // Increase the borderRadius value for more rounded corners
        '&:hover': {
            backgroundColor: "white",
            color: "red",


        },
    }
    const contactDetails = {
        display: "block",
        lineHeight: "8.5",
        margin: "10px auto", // Updated margin to "10px auto" to center the contact details horizontally
        textAlign: "center",
        
    }

    return (
        <div id="contact" className="contact">
            <Typography align='center' sx={[typographyStyles, { fontFamily: "sans-serif", opacity: "1" }]} variant='h5'>Get<b className='bold'>In Touch</b></Typography>
            <hr style={{ background: "#cc1836", margin: "0px 40% 5% 40%" }}></hr>
            <Container style={{ backgroundColor: 'white', marginBottom: '80px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.2)', borderRadius: '5px' }} maxWidth="lg" >
                <Grid container spacing={2} columns={10}>
                    <Grid item md={5} xs={10} sx={{ justifyContent: "center" }}>
                        <Typography sx={[typographyStyles, { opacity: "1" }]} variant='h5'>Send us Message</Typography>
                        <Box
                            component="form"
                            sx={textFieldStyles}
                            noValidate
                            autoComplete="off"
                        >
                            <div>
                                <TextField
                                    required
                                    label="Your Name"
                                />
                                <TextField
                                    required
                                    label="Your Email"
                                />
                                <TextField
                                    required
                                    label="Your Phone"
                                />
                                <TextField
                                    required
                                    label="Your Message"
                                    multiline
                                    rows={4}
                                />
                            </div>
                            <Button sx={btnStyles}>Send Message</Button>
                            <div style={{ marginTop: '30px' }}></div>
                        </Box>
                    </Grid>
                    <span id="divider"></span>

                    <Grid item md={4} xs={10} >

                        <Typography 
                        sx={[typographyStyles, { opacity: "1", 
                        marginLeft: "30%", 
                        marginTop: '70px ' }]}

                         variant='h5'>   Contact Details </Typography>

                        <ListItem style={contactDetails}>
                            <Typography sx={[typographyStyles, { fontFamily: "sans-serif", opacity: "1", color: "#661f2b" }]} variant='subtitle2'>Email</Typography>

                            <Typography sx={typographyStyles} variant='subtitle2'>carrental@carmail.com</Typography>

                        </ListItem>

                        <ListItem style={contactDetails}>

                            <Typography 
                            sx={[typographyStyles, {
                                fontFamily: "sans-serif",
                                 opacity: "1",
                                  color : "#661f2b"
                            }]} variant='subtitle2'>Phone</Typography>

                            <Typography sx={typographyStyles} variant='subtitle2'>+92 000 0000000</Typography>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} style={{ marginRight: '10px', fontSize: '30px', color: '#661f2b' }} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} style={{ marginRight: '10px', fontSize: '30px', color: '#661f2b' }} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} style={{ marginRight: '10px', fontSize: '30px', color: '#661f2b' }} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} style={{ marginRight: '10px', fontSize: '30px', color: '#661f2b' }} />
            </a>
        </div>

                        </ListItem>


                        {/* <ListItem style={contactDetails}>
<Typography sx={[typographyStyles, { fontFamily: "sans-serif", opacity: "1", color: "#bac964" }]} variant='subtitle2'>Fax</Typography>
<Typography sx={typographyStyles} variant='subtitle2'></Typography>
</ListItem> */}
                        {/* <ListItem style={contactDetails}>
<Typography sx={[typographyStyles, { fontFamily: "sans-serif", opacity: "1", color: "#bac964" }]} variant='subtitle2'>Address</Typography>
<Typography sx={typographyStyles} variant='subtitle2'>Block 4, Works Cooperative Housing Society, Gulistan-e-johar, Karachi.</Typography>
</ListItem> */}
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Contact;