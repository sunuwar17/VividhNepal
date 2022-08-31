import { Typography } from '@mui/material';
import React from 'react';


const MenuText = ({label}) => {
  return (
    <Typography variant='h6' sx={{ ml: 1, color:'secondary.main', fontSize:'15px' }}>{label}</Typography>
  )
}

export default MenuText