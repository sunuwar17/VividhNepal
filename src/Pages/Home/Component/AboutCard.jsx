import React from 'react';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Box, CardActionArea, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';


function AboutCard() {
    var cardStyle = {
        display: 'block',
        width: '100%',
        transitionDuration: '0.3s',
        height: '25vw'
    }
    return (
        <>
            <Card elevation={3} style={cardStyle} sx={{ display: 'flex', justifycontent: 'center' }} >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="50%"
                        width="auto"
                        image="https://source.unsplash.com/1920x1080/?cars,"
                        alt="green iguana"
                    />

                    <CardContent>
                        <Box >
                            <Typography
                                sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                                variant="body2"
                                color="textSecondary"
                              
                            >
                                Green Journey is travel related blog site which help in promoting tourism in Nepal and guide tourists who wants to know more about Nepal.
                            </Typography>


                        </Box>

                    </CardContent>
                </CardActionArea>
                <Box sx={{ textalign: "center" }}>
                    <Button >
                        About Us
                    </Button>
                </Box>
            </Card>


        </>
    )
}

export default AboutCard