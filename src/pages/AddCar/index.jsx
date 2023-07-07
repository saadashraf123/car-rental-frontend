import React, { useState } from 'react'
import "./style.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { Grid, TextField, createStyles, Paper, Typography, Box, Button, Input } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useForm } from "react-hook-form";
import { nullLiteral } from '@babel/types';

const AddCar = () => {

    const [file, setFile] = useState(null)
    const defaultTheme = createTheme();
    const classes = createStyles({
        extraStyles:
        {
            width: 100,
            maxWidth: 100,
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
    const { register, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            file: "",
            title: "",
            description: ""
        }
    });
    const addCarHandler = (data) => {
        console.log(data);
    }


    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginx: '20px' }} container component="main" sx={{ maxHeight: '100vh', justifyContent: 'center', my:2}}>
                    <Paper elevation={12} square sx={{ p: 4 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Typography
                                component="h1"
                                variant="h5"
                                sx={{ color: 'red', fontWeight: 'bold' }}
                            >
                                Add A Car
                            </Typography>
                                {file && (
                                    <img style={{width: "100%", maxHeight:"500px"}} className="writeImg" src={URL.createObjectURL(file)} alt="" />
                                )}
                            <Box sx={{width: "200px"}}>
                            </Box>
                            <Box component="form" onSubmit={handleSubmit(addCarHandler)} sx={{ mt: 2 }}>
                            <Input
                                    margin="normal"
                                    fullWidth
                                    id="file"
                                    label="Car Pictures"
                                    name="file"
                                    {...register("file", { required: true })}
                                    type='file'
                                    onChange={(e)=>setFile(e.target.files[0])}
                                />
                                {errors.file?.type === 'required' && <p role="alert" className='text-danger'>*Email Address is required</p>}
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    {...register("title", { required: true })}

                                />
                                {errors.title?.type === 'required' && <p role="alert" className='text-danger'>*Email Address is required</p>}
                                <TextField
                                    margin="normal"
                                    fullWidth
                                    id="description"
                                    label="Description"
                                    name="description"
                                    {...register("description", { required: true })}
                                />
                                {errors.description?.type === 'required' && <p role="alert" className='text-danger'>*Email Address is required</p>}
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    className={classes.extraStyles}
                                >
                                    Add A Car
                                </Button>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
        </ThemeProvider>
    );
};
export default AddCar



// <div className="write">
            
//             <form className="writeForm" onSubmit={""}>
//                 <div className="writeFormGroup">
//                     <label htmlFor="fileInput">
//                         <i className="writeIcon fas fa-plus"></i>
//                     </label>
//                     <input id="fileInput" type="file" style={{}}
//                         onChange={(e) => setFile(e.target.files[0])} required />
//                     <input
//                         // value={title}
//                         onChange={(e) => setTitle(e.target.value)}
//                         className="writeInput"
//                         placeholder="Title"
//                         type="text"
//                         // autoFocus={true}
//                         required
//                     />
//                 </div>
//                 <div className="writeFormGroup">
//                     <textarea
//                         // value={desc}
//                         onChange={(e) => setDesc(e.target.value)}
//                         className="writeInput writeText"
//                         placeholder="Tell your story..."
//                         type="text"
//                     />
//                 </div>
//                 <Select
//                     isMulti
//                     name="categories"
//                     options={updatedCategory}
//                     className="basic-multi-select"
//                     classNamePrefix="select"
//                     getOptionLabel={(option) => option.value}
//                     onChange={handleSelectCategory}
//                 />


//     <div className="writeFormGroup">
//         <button className="writeSubmit" type="submit">
//             Publish
//         </button>
//     </div>
//             </form >
//         </div >