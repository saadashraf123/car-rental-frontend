import React, { useState } from 'react';
import { Button, createStyles, Typography } from '@mui/material'
import { Link } from 'react-router-dom';

const FeaturedItem = ({ data }) => {
    const classes = createStyles({
        ButtonStyles:
        {
            width: 150,
            backgroundColor: "#DC3545",
            color: "white",
            fontWeight: "bold",
            mt: 2,
            ml: 10,
            p: 1,
            mb: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
    });

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                {/* <img className="img-fluid" alt="100%x280" src={data.car_image} style={{ boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", maxHeight: "350px" }} /> */}
                <div className="card-body">
                
                    <Typography
                        component="h1"
                        variant="h5"
                        sx={{ color: 'black', marginTop: 2 }}
                    >
                        {data.car_name}
                    </Typography>
                    <Typography
                        component="h6"
                        variant="p"
                        sx={{ color: 'gray' }}
                    >
                        {data.car_model}  {data.car_category}
                    </Typography>
                    <Typography
                        component="h6"
                        variant="p"
                        sx={{ color: 'teal' }}
                    >
                        {data.car_location}
                    </Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={[{ mt: 3, mb: 2 }, classes.ButtonStyles]}
                        component={Link}
                        to={"/details"}
                        state={data}
                    >
                        View
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FeaturedItem;
