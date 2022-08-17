import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import { ThemeProvider } from '@emotion/react';
import customTheme from './Global/Theme';
import Gallery from './Pages/Gallery/Gallery';
function App() {
  return (
    <>
      <ThemeProvider theme={customTheme}>
        <Router>
          <Routes>
            
            {/* HomePage */}
            <Route element={<Home />} path="/" />
            <Route element= {<Gallery/>} path="gallery"/>

          </Routes>
        </Router>
        </ThemeProvider>
    </>
  );
}

export default App;
