import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const MenuBox = styled(Box)(({ theme }) => ({
    '&:hover': {
        cursor: 'pointer',
        backgroundColor: '#f6f6f6',
    },
    height: '50px',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: '10px',
    justifyContent: 'start',
    marginBottom:'5px'
})) 

export default MenuBox;