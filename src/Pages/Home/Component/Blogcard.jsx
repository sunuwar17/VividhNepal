import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Box, CardActionArea, CardMedia } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


export default function BlogCard() {
    var cardStyle = {
        display: 'flex',
        width: '100%',
        transitionDuration: '0.3s',
        height: '30vh',
        p: '0'
    }
    
    const navigate = useNavigate();
    return (
        <>
            <Card elevation={1}   sx={{
                                ml: 2, 
                                overflow: "hidden", textOverflow: "ellipsis" }}>
                <CardActionArea onClick={()=>navigate("/BlogDetail")}>
                    <CardContent>
                        <Box sx={{ display: 'flex', p: 0 }} style={cardStyle}>
                            <CardMedia
                                component="img"
                                height="auto"
                                width="50%"
                                image="https://source.unsplash.com/1920x1080/?nature/sky,"
                                alt="green iguana"

                            />
                            <Box sx={{
                                ml: 2,
                                overflow: "hidden", textOverflow: "ellipsis", 
                            }}>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                >
                                    Lorem ipsum dolor lorem50 Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus in quas eum architecto magnam. Illum voluptate doloribus accusamus ratione aperiam autem dolorem quam deserunt, sed provident, officiis blanditiis, nam perspiciatis. Laudantium, cupiditate iure vel deleniti nam, consequuntur obcaecati numquam deserunt asperiores fuga illum provident laboriosam nobis voluptatum, ducimus recusandae nulla?
                                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi aut eligendi quia. Corporis necessitatibus eos id numquam cupiditate totam asperiores reprehenderit optio aperiam quam excepturi laborum, consequuntur quia sapiente adipisci beatae in soluta voluptas animi expedita cum voluptate? Earum quidem hic, ut reiciendis distinctio, aut nisi sed officia veniam, voluptatum sequi nulla delectus doloremque placeat. Molestiae, at tempora? Debitis assumenda numquam optio, id fugiat consequatur facere magni vero rem sit. Perspiciatis, minus. Ullam veritatis, recusandae voluptatem nemo architecto totam cumque, illo neque mollitia praesentium nobis quaerat sequi quasi nisi asperiores harum inventore? Dolorem ab similique sint ipsam aspernatur iusto esse fuga maiores recusandae deleniti corporis vel, repellendus repudiandae quam dolorum! Fuga, similique dicta quibusdam aspernatur quam vel labore rerum culpa? Dolor commodi deleniti asperiores voluptates ab error perspiciatis totam minus animi inventore iste pariatur, at cumque similique, eveniet sit quos consequuntur. Qui eveniet assumenda dicta, et nulla corporis magni quia doloribus natus, ex facilis placeat nostrum beatae autem possimus velit fugiat dolor. Perferendis eveniet consequuntur laudantium numquam, inventore, in tempora voluptatum magnam ex nobis aut voluptates. Deserunt ipsam quisquam deleniti tempore ullam architecto modi dolorem odit sit? Dicta, cumque adipisci magnam porro cupiditate quod non facilis at repellendus harum. Nostrum. sit amet consectetur adipisicing elit. Minima, dolorem! Ex aperiam accusantium quisquam, obcaecati, quibusdam dolore doloribus veritatis saepe optio ducimus error beatae, iste repellat aliquam possimus velit assumenda voluptate cum veniam aut eos laborum? Tempora incidunt consequatur totam, facilis delectus in. Doloremque corporis harum omnis quia repudiandae adipisci.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus sunt, totam illo deserunt cum delectus accusantium sint maxime, odio quas, officiis quia aliquid veritatis itaque adipisci ea perspiciatis vero.2
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