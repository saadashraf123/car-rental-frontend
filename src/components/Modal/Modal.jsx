import React, { useState } from 'react';
import { Button, Dialog, DialogActions, createStyles, DialogTitle } from '@mui/material';


const Modal = ({ children, btnText, modalTitle, handleConfirm, icon }) => {
    const [open, setOpen] = useState(false);

    const classes = createStyles({
        ButtonStyles:
        {
            backgroundColor: "#DC3545",
            color: "white",
            width: '100%',
            maxWidth: '150px',
            fontWeight: "bold",
            mt: 2,
            mr: 1,
            pt: 1,
            '&:hover': {
                backgroundColor: 'white',
                color: "#DC3545"
            },
        },
        closeStyles: {
            backgroundColor: "teal",
            color: "white",
            '&:hover': {
                backgroundColor: 'white',
                color: "teal"
            },
        }
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{modalTitle}</DialogTitle>
                {children}
                <DialogActions>
                    <Button variant="contained" sx={classes.ButtonStyles} onClick={handleClose}>Cancel</Button>
                    <Button variant="contained" sx={[classes.ButtonStyles, classes.closeStyles]} onClick={handleConfirm}>Confirm</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}


export default Modal;