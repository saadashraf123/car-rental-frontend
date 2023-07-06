import React from 'react'
import "./style.module.css"
import { Button, createStyles } from '@mui/material'
import { Link } from 'react-router-dom'

const ButtonComponent = (props) => {
    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: '100%',
            maxWidth: '200px',
            fontWeight: "bold",
            mt: 2,
            mr: 1,
            p: 2,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        }
    });
    console.log(props.btnType);
    return (
        <Button type={props.btnType} variant={props.variant} size={props.size} component={Link} to={props.to} sx={[classes.ButtonStyles, props.extraStyles, props.scrolledStyles]} endIcon={props.icon}>{props.text}</Button>
    )
}

export default ButtonComponent