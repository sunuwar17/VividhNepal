import React from 'react';
import { Box } from "@mui/material";

 const Gmap=()=>{
    return (
        <Box>
           <iframe width="500" height="400" title="googleMap" id="gmap_canvas" src="https://maps.google.com/maps?q=kathmandu,%20anamnagar&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
        <div id="ww_dfc65e26d04e2" v='1.20' loc='id' a='{"t":"responsive","lang":"en","ids":[],"cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722","sl_tof":"7","sl_sot":"fahrenheit","sl_ics":"one_a","font":"Arial"}'>
         
        </div>
        <script async src="https://srv1.weatherwidget.org/js/?id=ww_dfc65e26d04e2">

        </script> 

        </Box>
    );
 }
 export{Gmap}