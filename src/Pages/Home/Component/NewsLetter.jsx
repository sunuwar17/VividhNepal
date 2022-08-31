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
        height: 'auto',
        display: 'flex'
    }
    return (
        <>
            <Card elevation={3} style={cardStyle} >
                <Box sx={{p:4}}>
                    <Typography
                        color="inherit"
                        variant="h6"
                        style={{textAlign:'center'}}
                    >
                        NEWSLETTER
                    </Typography>
                    <Typography
                         variant="body2"
                         color="textSecondary"
                        
                    >
                        Sign Up to Recieve Latest Story
                        
                    </Typography>
                    <TextField id="outlined-basic" label="Email" variant="outlined" size='3'/>
                    <Button >
                    Subscribe
                </Button>
                </Box>
            </Card>


        </>
    )
}

export default NewsLetter