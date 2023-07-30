import React, { useState } from 'react';
import { Grid, Card, CardHeader, CardContent, Typography, Rating } from '@mui/material';

const cardStyles = {
    minWidth: "300px",
    width: '60%',
    margin: '30px 10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
};


const FeedbackItem = ({ data }) => {
    return (
        <Card style={cardStyles}>
            <CardHeader title={data.firstname + " " + data.lastname} subheader={`Date: ${data.datetime}`} />
            <CardContent>
                <Typography variant="body1" gutterBottom>
                    <strong>Rating:</strong> <Rating value="5" readOnly />
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Feedback: {data.fb_description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    Car: {data.car_name + " (" + data.car_category + ")"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default FeedbackItem