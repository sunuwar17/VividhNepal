import React from 'react'
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import { Paper,Box } from "@mui/material";
import Typography from '@mui/material/Typography';


function About() {
  return (
    
    <div>
      <Header/>
      <Box minHeight='90vh'>
      <Typography sx={{textAlign:'center', fontSize:'40px',pt:40}}>This Is Our About Section  </Typography>
      </Box>
    <Footer/>

      </div>
  )
}

export default About