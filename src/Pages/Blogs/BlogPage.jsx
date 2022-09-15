import React from 'react'
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import { Paper } from "@mui/material";
import Grid from '@material-ui/core/Grid';
import BlogCard from '../Home/Component/Blogcard';
import { useNavigate } from 'react-router';
function Blog() {
const navigate = useNavigate();
  return (
    <>
    <Header />
    <Paper sx={{ px: 20, pb: 4, mt:12, minHeight:'100vh' }}>
            <Grid container spacing={2} >
            {Array.from(Array(6)).map((_, index) => (

              <Grid item xs={12} md={12} lg={12} >
                  <BlogCard onClick={() => navigate("/Blog/:slug")}/>
                  

              </Grid>
            ))}
            </Grid>
          </Paper>

    
    <Footer/>
    </>

  )
}

export default Blog