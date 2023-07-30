import React, { useEffect } from 'react'
import "./style.module.css"
import { Paper, Box, Grid, createTheme, ThemeProvider } from '@mui/material'
import useFetch from '../../Hooks/useFetch';
import FeedbackItem from '../../components/FeedbackItem'
import { useStateContext } from '../../Contexts/stateContext';
const Feedbacks = () => {
    const defaultTheme = createTheme();
    const { user } = useStateContext();
    const url = {
        method: 'GET',
        url: `feedback/userFeedback/${user?.user_id}`,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
    };

    const { data, error, loading, fetchApi } = useFetch();
    const result = data?.feedbacks

    useEffect(() => {
        if (user) {
            fetchApi(url)
        }
    }, [])

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid style={{ marginTop: '10px' }} container sx={{ height: '100%', justifyContent: 'center' }}>
                <Paper elevation={2} square sx={{ p: 4, width: "90%" }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'left',
                        }}
                    >
                        {result?.map((item, index) => (
                            <FeedbackItem key={index} data={item} />
                        ))}
                    </Box>
                </Paper>
            </Grid>
        </ThemeProvider >
    )
}

export default Feedbacks