import { Typography } from '@material-ui/core';
import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@material-ui/core/Card'
import { Box } from '@mui/material';
import Button from '@mui/material/Button';

function NewsLetter() {
    var cardStyle = {
        display: 'block',
        width: '100%',
        transitionDuration: '0.3s',
        height: 'auto',
        display: 'flex'
    }
    return (
        <>
            <Card elevation={3} style={cardStyle} >
                <Box sx={{ p: 3, textAlign: 'center' }}>
                    <Typography
                        color="inherit"
                        variant="h6"
                    >
                        NEWSLETTER
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"

                    >
                        Sign Up to Recieve Latest Story

                    </Typography>
                    <TextField id="outlined-basic" placeholder="Full Name" variant="standard" size='2' fullWidth 
                    sx={{
                        "& .MuiInputBase-root": {
                            "& input": {
                                textAlign: "center"
                            }
                        },mb:1
                      }} />
                    <TextField id="outlined-basic" placeholder="Email" variant="standard" size='2' fullWidth
                    sx={{
                        "& .MuiInputBase-root": {
                            "& input": {
                                textAlign: "center"
                            }
                        }
                      }} />
                    <Button variant="contained" sx={{ mt: 2, }} >
                        Subscribe
                    </Button>
                </Box>
            </Card>


        </>
    )
}

export default NewsLetter