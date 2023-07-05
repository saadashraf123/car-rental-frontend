import React from 'react'
import "./style.module.css"
import { Container, Grid, TextField, Button, MenuItem, createStyles, Paper, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';


const SearchSection = () => {
    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "red",
            color: "white",
            width: 200,
            maxWidth: '200px',
            fontWeight: "bold",
            p: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "red"
            },
        },
        textInputStyles: {
            width: 400,
            my: 2
        }
    });
    return (
        <Container sx={{ mx: 'auto' }}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }} container spacing={5} alignItems="center" component={Paper} elevation={6}>
                <Typography component="h4" variant="h4" sx={{ color: "red", fontWeight: "semi-bold", mt: 3 }}>
                    Search For Your Favorite Car
                </Typography>
                <Grid item container
                    direction="row"
                    justifyContent="space-evenly"
                >
                    <TextField
                        label="Select Option 1"
                        variant="outlined"
                        select
                        sx={classes.textInputStyles}
                    >
                        <MenuItem value="option1">Option 1</MenuItem>
                        <MenuItem value="option2">Option 2</MenuItem>
                        <MenuItem value="option3">Option 3</MenuItem>
                    </TextField>
                    <TextField
                        label="Select Option 2"
                        variant="outlined"
                        select
                        sx={classes.textInputStyles}
                    >
                        <MenuItem value="option4">Option 4</MenuItem>
                        <MenuItem value="option5">Option 5</MenuItem>
                        <MenuItem value="option6">Option 6</MenuItem>
                    </TextField>
                </Grid>
                <Grid item container
                    direction="row"
                    justifyContent="space-evenly"
                >
                    <TextField
                        type="date"
                        label="Select Date 1"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={classes.textInputStyles}
                    />
                    <TextField
                        type="date"
                        label="Select Date 2"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={classes.textInputStyles}
                    />
                </Grid>
                <Box
                    sx={{
                        my: 2,
                    }}
                >
                    <Button variant="contained" component={Link} to={'/details'} sx={classes.ButtonStyles}>
                        Search
                    </Button>
                </Box>
            </Box>
        </Container >
    )
}

export default SearchSection