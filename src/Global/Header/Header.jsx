import React from 'react'
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
import { InputBase, Paper } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import HideOnScroll from './HideOnScroll';
import { useNavigate } from "react-router-dom";
import logo from '../../logo.png';


function Header(props) {

  const drawerWidth = 240;
  const navItems = ['Home', 'Shop', 'Blog', 'News', 'Contact', 'Gallery', 'About',];

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
            <ListItemButton onClick={() => navNavigation(item)} sx={{ textAlign: 'flex-start' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  const navigate = useNavigate();

  const navNavigation = (name) => {
    if (name === 'Gallery') navigate('/gallery')
    if (name === 'Home') navigate('/')
    if (name === 'About') navigate('/about')
    if (name === 'Contact') navigate('/contact')
    if (name === 'Shop') navigate('/shop')
    if (name === 'Blog') navigate('/blog')
    if (name === 'News') navigate('/news')
  }

  return (
    <>
      <Paper sx={{ display: 'flex' }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar component="nav" sx={{ position: 'fiexd', width: '100%', px: { lg: 5, sm: 12, xs: 'none' } }}>
            <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }} >
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
                sx={{ display: { lg: 'block', sm: 'block', xs: 'none' }, height: 80, cursor: 'pointer', p: 2 }}
                component="img"
                alt="logo"
                src={logo}
                onClick={() => navigate("/")} />

              <Box sx={{ display: { xs: 'none', sm: 'flex' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}
                    onClick={() => navNavigation(item)}
                  >
                    {item}
                  </Button>
                ))}
              </Box>

              <Box
                sx={{ display: { lg: 'none', sm: 'none', xs: 'block' } }}>
                <img
                  sx={{ flexGrow: 1 }}
                  alt="logo"
                  src={logo}
                />
              </Box>

              <Paper
                component="form"
                sx={{
                  p: '0px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  width: {
                    xs: 60,
                    md: 150
                  },
                  height: '35px',
                  display:{xs:'none', lg:'flex'}
                }}
              >
                <InputBase
                  sx={{ ml: 1 }}
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search....' }}
                />
                <Divider sx={{ height: 28 }} orientation="vertical" />
                <IconButton type="submit" aria-label="search">
                  <SearchIcon />
                </IconButton>
              </Paper>

              {/* <Paper>
                <Box >

                  <IconButton type="submit" onClick={handleVisibility} sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                  </IconButton>
                </Box>
                <aside className={visible ? "open" : "close"} style={{width:'200'}}>
                  <InputBase placeholder="Search..." type="text" />
                </aside>
              </Paper> */}

            </Toolbar>
          </AppBar>
        </HideOnScroll>

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

      </Paper>

    </>
  )
}

export default Header