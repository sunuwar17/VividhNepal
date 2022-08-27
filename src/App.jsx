import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@emotion/react';
import customTheme from './Global/Theme';
import Gallery from './Pages/Gallery/Gallery';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Blog from './Pages/Blogs/Blog';
import News from './Pages/News/News';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Routes>
            
              {/* HomePage */}
              <Route element={<Home />} path="/"/> 

              <Route element= {<Gallery/>} path="gallery"/>
              <Route element= {<Contact/>} path="contact"/>
              <Route element= {<About/>} path="about"/>
              <Route element= {<Blog/>} path="blog"/>
              <Route element= {<News/>} path="news"/>
              <Route element= {<Shop/>} path="shop"/>
            
          </Routes>
        </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
