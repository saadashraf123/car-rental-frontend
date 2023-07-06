import React, { useState } from 'react'
import "./style.module.css"
import { RiAddCircleFill } from 'react-icons/ri';
import {
    TextField,
    Button,
    FormControl,
    InputLabel,
    Input,
    Card,
    CardContent,
    CardActions,
    Typography,
} from '@mui/material';

const AddCar = () => {
    const [car, setCar] = useState({
        name: '',
        model: '',
        details: '',
        picture: null,
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCar((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setCar((prevState) => ({
            ...prevState,
            picture: file,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        console.log(car);
        // Reset the form after submission
        setCar({
            name: '',
            model: '',
            details: '',
            picture: null,
        });
    };

    return (
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2">
                    Add a Car
                </Typography>
                <form onSubmit={handleSubmit}>
                    <FormControl>
                        <InputLabel>Name</InputLabel>
                        <Input
                            name="name"
                            value={car.name}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>Model</InputLabel>
                        <Input
                            name="model"
                            value={car.model}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>Details</InputLabel>
                        <Input
                            name="details"
                            value={car.details}
                            onChange={handleInputChange}
                            required
                        />
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel>Picture</InputLabel>
                        <Input
                            name="picture"
                            type="file"
                            onChange={handlePictureChange}
                            required
                        />
                    </FormControl>
                    <br />
                    <CardActions>
                        <Button
                            variant="contained"
                            color="primary"
                            startIcon={<RiAddCircleFill />}
                            type="submit"
                        >
                            Add Car
                        </Button>
                    </CardActions>
                </form>
            </CardContent>
        </Card>
    );
};
export default AddCar