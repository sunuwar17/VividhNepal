import React from 'react';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Paper,Box } from "@mui/material";
function Footer() {

  return (
    <>
      <Paper sx={{ bgcolor: '#2B7A0B', color: 'white', height: '30vh', display: 'flex', justifyContent: 'space-between',
                  bottom:0, left:'0',width:'100%'}}>
      {/* position:absolute;
        left:0;
        bottom:0;
        right:0; */}
        <Grid container spacing={0}  >
          <Grid item xs={12} sm={4} lg={4} sx={{ textAlign: 'center' }}  >
            <Box sx={{ textAlign: 'center', p:2 }}>
              <Box  sx={{ pb:2,fontSize:16}} >Support</Box>
              <Box>
                <Link href="/" color="inherit">
                  Safety Information
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Help
                </Link>
              </Box>
            </Box>

          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Box sx={{ textAlign: 'center',p:2 }}>
              <Box  sx={{ pb:2, fontSize:16}}  >Company</Box>
              <Box>
                <Link href="/" color="inherit">
                  About Us
                </Link>
              </Box>
              <Box >
                <Link href="/" color="inherit">
                  Terms Of Service
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Privacy Policy
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4} lg={4}>
            <Box sx={{ textAlign: 'center', p:2 }}>
              <Box sx={{fontSize:16, pb:2}}>Contact</Box>
              <Box>
                <Link href="/" color="inherit">
                  FAQ
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Get In Touch
                </Link>
              </Box>
              <Box>
                <Link href="/" color="inherit">
                  Partnership
                </Link>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} lg={4} sx={{m:0}}>

          </Grid>

        </Grid>
       
        {/* <Paper fontSize={16} sx={{ textAlign: 'center',bgcolor: '#2B7A0B' }}>
          Green Journey Nepal 2015 ©
        </Paper> */}

      </Paper>
      
     
    </>
  )
}


export default Footer