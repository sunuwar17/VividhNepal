import React from 'react'
import Header from '../../Global/Header/Header';
import Footer from '../../Global/Footer/Footer';
import BlogCard from '../../Pages/Home/Component/Blogcard';
import {Box} from "@mui/material";
function BlogOpen() {
  return (
    <div>
        <Header/>
        <Box minHeight={'100vh'}>
       <BlogCard/>
        </Box>
        <Footer/>
        
    </div>
  )
}

export default BlogOpen
