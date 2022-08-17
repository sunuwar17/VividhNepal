import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';



function Gallery() {
  return (
    <>
       <Box>
       <Typography sx={{textAlign:'center', fontSize:'40px'}}>This Is Our Awesome Gallery.  </Typography>
       <img alt= "water" src="https://source.unsplash.com/random"/>
       </Box>


    </>
  )
}

export default Gallery