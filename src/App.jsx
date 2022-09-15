import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@emotion/react';
import customTheme from './Global/Theme';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import BlogPage from './Pages/Blogs/BlogPage';
import News from './Pages/News/News';
import Shop from './Pages/Shop/Shop';
import Login1 from './Auth/Login1';
import Dashboard from './Pages/Dashboard/Dashboard';
import BlogDetail from './Pages/Blogs/BlogDetail';


function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Routes>
            
              {/* HomePage */}
              <Route element={<Home />} path="/"/> 
              <Route element={<Login1 />} path="/login"/> 
              <Route element={<Dashboard />} path="/dashboard"/> 
            
              <Route element= {<Gallery/>} path="gallery"/>
              <Route element= {<Contact/>} path="contact"/>
              <Route element= {<About/>} path="about"/>
              <Route element= {<BlogPage/>} path="blogpage"/>
              <Route element= {<News/>} path="news"/>
              <Route element= {<Shop/>} path="shop"/>
              <Route element= {<BlogDetail/>} path="BlogDetail"/>
            
          </Routes>
        </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
