import React from 'react'
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import { Paper,Box } from "@mui/material";
import Typography from '@mui/material/Typography';


function Contact() {
  return (
    <>
    <Header/>
    <Box minHeight='90vh'>
    <Typography sx={{textAlign:'center', fontSize:'40px',pt:40}}>This Is Contact Section.  </Typography>
    </Box>
    <Footer/>
    
    </>
  )
}

export default Contact