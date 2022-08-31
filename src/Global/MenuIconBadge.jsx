import { Box } from '@mui/material'
import React from 'react'



const MenuIconBadge= ({children, show}) => {
    return (
        <div>
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                {children}
                {
                show ?   
                <Box 
                sx={{ height: '.3rem', 
                width: '.3rem', 
                borderRadius: '50%', 
                background: 'red', 
                position: 'absolute', 
                top: 0, 
                right: 0 }} 
                /> : ''
                }
            </Box>
        </div>
    )
}

export default MenuIconBadge;