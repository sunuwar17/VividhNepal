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
        p:'0'

    }
    return (
        <>
            <Card elevation={1}  >
                <CardActionArea  >
                    <CardContent>
                        <Box sx={{ display: 'flex', p:0 }} style={cardStyle}>
                            <CardMedia
                                component="img"
                                height="auto"
                                width="50%"
                                image="https://source.unsplash.com/1920x1080/?nature/sky,"
                                alt="green iguana"
                            />
                            <Box sx={{ml:2, textOverflow: 'ellipsis', overflow: 'hidden'}}>
                            <Typography
                                sx={{ textOverflow: 'ellipsis', overflow: 'hidden'}}
                                variant="body2"
                                color="textSecondary"
                                
                                                           
                            >
                                Lorem ipsum dolor lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus in quas eum architecto magnam. Illum voluptate doloribus accusamus ratione aperiam autem dolorem quam deserunt, sed provident, officiis blanditiis, nam perspiciatis. Laudantium, cupiditate iure vel deleniti nam, consequuntur obcaecati numquam deserunt asperiores fuga illum provident laboriosam nobis voluptatum, ducimus recusandae nulla?
                                 sit amet consectetur adipisicing elit. Minima, dolorem! Ex aperiam accusantium quisquam, obcaecati, quibusdam dolore doloribus veritatis saepe optio ducimus error beatae, iste repellat aliquam possimus velit assumenda voluptate cum veniam aut eos laborum? Tempora incidunt consequatur totam, facilis delectus in. Doloremque corporis harum omnis quia repudiandae adipisci.
                                
                            </Typography>
                        </Box>
                        </Box>
                    </CardContent>
                </CardActionArea>
                {/* <Box sx={{ textalign: 'center',display:'absolute' }}>
                    <Button  >
                        Read More
                    </Button>
                </Box> */}
            </Card>
        </>
    )
}