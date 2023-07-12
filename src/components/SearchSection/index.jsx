import React from 'react'
import "./style.module.css"
import { Container, Grid, TextField, MenuItem, createStyles, Paper, Box, Typography } from '@mui/material';
import ButtonComponent from '../Button';


const SearchSection = () => {
    const classes = createStyles({
        extraStyles:
        {
            width: 200,
        },
        textInputStyles: {
            width: 400,
            my: 2
        }
    });
    return (
        <Container sx={{ mx: 'auto' }} id="search">
            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }} container spacing={5} alignItems="center" component={Paper} elevation={6}>
                <Typography component="h4" variant="h4" sx={{ color: "#DC3545", fontWeight: "semi-bold", mt: 3 }}>
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
                    <ButtonComponent text={"Search Car"} variant={"contained"} size={"medium"} extraStyles={classes.extraStyles} to={"/search"} />
                </Box>
            </Box>
        </Container >
    )
}

export default SearchSection