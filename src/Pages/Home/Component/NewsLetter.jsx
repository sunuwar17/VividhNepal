import { Typography } from '@material-ui/core';
import React from 'react';
import TextField from '@mui/material/TextField';
import Card from '@material-ui/core/Card'
import { Box} from '@mui/material';
import Button from '@mui/material/Button';


function NewsLetter() {
    var cardStyle = {
        display: 'block',
        width: '100%',
        transitionDuration: '0.3s',
        height: 'auto'
    }
    return (
        <>
            <Card elevation={3} style={cardStyle} sx={{ display: 'flex'}} >
                <Box sx={{p:4, textalign:'center'}}>
                    <Typography
                        color="textSecondary"
                        variant="h6" 
                        gutterBottom
                    >
                        NEWSLETTER
                    </Typography>
                    <Typography
                         variant="body2"
                         color="textSecondary"
                        gutterBottom
                    >
                        Sign Up to Recieve Latest Story
                    </Typography>
                    <TextField id="outlined-basic" label="Email" variant="outlined" size='5'/>
                    <Button justifycontent="center">
                    Subscribe
                </Button>
                </Box>
            </Card>


        </>
    )
}

export default NewsLetter