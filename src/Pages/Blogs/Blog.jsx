import React from 'react'
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import { Paper,Box } from "@mui/material";
import Typography from '@mui/material/Typography';


function Blog() {
  return (
    <>
    <Header/>

    <Paper minHeight='90vh'>
      {/* <Box sx={{height:60, width:360}}> */}

      {/* </Box> */}
    </Paper>
    
    <Footer/>
    </>

  )
}

export default Blog