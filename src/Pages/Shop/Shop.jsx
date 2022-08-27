import React from 'react'
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import { Paper,Box } from "@mui/material";
import Typography from '@mui/material/Typography';

function Shop() {
  return (
    <>
    <Header/>
    <Box minHeight='90vh'>
    <Typography sx={{textAlign:'center', fontSize:'40px',pt:40}}>This Is Our Shop.  </Typography>
    </Box>
    <Paper>
    <Footer/>
    </Paper>
    </>  
 )
}

export default Shop