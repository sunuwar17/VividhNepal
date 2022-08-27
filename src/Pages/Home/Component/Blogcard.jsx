import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Box, CardActionArea, CardMedia } from '@mui/material';
import Button from '@mui/material/Button';

export default function BlogCard() {
    var cardStyle = {
        display: 'flex',
        width: '100%',
        transitionDuration: '0.3s',
        height: '30vh',

    }
    return (
        <>
            <Card elevation={1}  >
                <CardActionArea  >
                    <CardContent>
                        <Box sx={{ display: 'flex' }} style={cardStyle}>
                            <CardMedia
                                component="img"
                                height="auto"
                                width="50%"
                                image="https://source.unsplash.com/1920x1080/?nature/sky,"
                                alt="green iguana"

                            />
                            <Box>
                            <Button sx={{position:'absolute', textAlign:'center',justifyContent:'center'}} >
                        Read More
                    </Button>
                            <Typography
                                sx={{ textOverflow: 'ellipsis', overflow: 'hidden' }}
                                variant="body2"
                                color="textSecondary"
                                gutterBottom
                                
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolorem! Ex aperiam accusantium quisquam, obcaecati, quibusdam dolore doloribus veritatis saepe optio ducimus error beatae, iste repellat aliquam possimus velit assumenda voluptate cum veniam aut eos laborum? Tempora incidunt consequatur totam, facilis delectus in. Doloremque corporis harum omnis quia repudiandae adipisci.
                                
                            </Typography>
                            </Box>

                        </Box>

                    </CardContent>
                </CardActionArea>
                <Box sx={{ textalign: 'center' }}>
                    <Button  >
                        Read More
                    </Button>
                </Box>
            </Card>
        </>
    )
}