import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import { Paper } from "@mui/material";

function Gallery() {
  return (
    <>
    <Header/>
    <h1>Gallery Items updated</h1>
 
       <Box minHeight='100vh'>
       <Typography sx={{textAlign:'center', fontSize:'40px'}}>This Is Our Awesome Gallery.  </Typography>
       <img alt= "water" sx={{justifyContent:'center'}}src="https://source.unsplash.com/random"/>
       </Box>

    <Footer/>
    </>
  )
}

export default Gallery