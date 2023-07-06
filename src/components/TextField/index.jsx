import React from 'react'
import "./style.module.css"
import { TextField, createStyles } from '@mui/material'
import { Link } from 'react-router-dom'

const TextFieldComponent = (props) => {
    const classes = createStyles({
        extraStyles:
        {
            width: "100%",
            maxWidth: 500,
            p: 1,
            mb: 2
        },
        textFieldStyles: {
            '& label': {
                color: '#DC3545',
            },
            '& label.Mui-focused': {
                color: '#DC3545',
            },
            '& .MuiInput-underline:after': {
                borderBottomColor: '#DC3545',
            },
            '& .MuiOutlinedInput-root': {
                '& fieldset': {
                    borderColor: '#DC3545',
                },
                '&:hover fieldset': {
                    borderColor: '#DC3545',
                    borderWidth: '0.15rem',
                },
                '&.Mui-focused fieldset': {
                    borderColor: '#DC3545',
                },
            }
        }
    });

    return (
        <TextField
            margin="normal"
            // required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            // {...register("email", { required: true })}
            autoFocus
            sx={classes.textFieldStyles}
        />
    )
}

export default TextFieldComponent