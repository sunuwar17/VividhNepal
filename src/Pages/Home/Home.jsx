import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Avatar, InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from "@mui/material/TextField";



const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'News', 'Gallery'];

function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} 
    sx={{ textAlign: 'center' }}>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'flex-start' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex'}}>
      <AppBar component="nav" sx={{ px:{lg:15, sm:15, xs:'none'}}}>
        <Toolbar sx={{justifyContent: 'space-between'}} >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box 
          sx={{ display:{lg:'block', sm:'block', xs:'none'}}}>
          <Avatar 
          sx={{flexGrow: 1}} 
          alt="Remy Sharp" 
          src="https://source.unsplash.com/random" />
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box>

          <Box 
          sx={{ display:{lg:'none',sm:'none', xs:'block'}}}>
          <Avatar 
          sx={{flexGrow: 1}} 
          alt="Remy Sharp" 
          src="https://source.unsplash.com/random" />
          </Box>
          
          <Paper
             component="form"
             sx={{
                 // ml: 1,
                 p: '0px 4px',
                 display: 'flex',
                 alignItems: 'center',
                 width: {
                     xs: 60,
                     md: 150
                 },
                 height: '35px',
                 
             }}
         >
             <InputBase
                 sx={{ ml: 1 }}
                 placeholder="Search..."
                 inputProps={{ 'aria-label': 'search....' }}
             />
             <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
             <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                 <SearchIcon />
             </IconButton>
         </Paper>              
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box> 

    </Box>
  );
}


export default Home;
