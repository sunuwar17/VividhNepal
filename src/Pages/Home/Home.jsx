import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Paper } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import BlogCard from './Component/Blogcard';
import Footer from '../../Global/Footer/Footer';
import Header from '../../Global/Header/Header';
import Grid from '@material-ui/core/Grid';
import AboutCard from './Component/AboutCard';
import NewsLetter from './Component/NewsLetter';
import Watch from './Component/Watch';
import home1 from './home1.jpeg';
import home2 from './home2.jpeg';
import h3 from './h3.jpg';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [

  {
    label: 'home1, img',
    imgPath: home1
  },


  {
    label: 'Bali, Indonesia',
    imgPath: h3
  },

  {
    label: 'Goč, Serbia',
    imgPath: home2

  },

];


function Home() {


  // For slideshow of home        
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  //slideshow of home ends here





  return (
    <>
      <Paper >
        <Header />


        <Paper sx={{flexGrow: 1 }}>

          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents

          >
              
            {images.map((step, index) =>  (
              <div key={step.label}>
                {Math.abs(activeStep - index) <= 2 ? (
                  <Box
                    component="img"
                    sx={{
                      height: '100vh',
                      display: 'block',
                      width: '100%',
                      overflow: 'hidden',

                    }}
                    src={step.imgPath}
                    alt={step.label}

                  />
                ) : null}
              </div>
            ))}
          </AutoPlaySwipeableViews>

          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            display='absolute'
            nextButton={
              <Button
                size="small"
                onClick={handleNext}
                disabled={activeStep === maxSteps - 1}
              >
                Next
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowLeft />
                ) : (
                  <KeyboardArrowRight />
                )}
              </Button>
            }
            backButton={
              <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? (
                  <KeyboardArrowRight />
                ) : (
                  <KeyboardArrowLeft />
                )}
                Prev
              </Button>
            }
          />



          <Paper sx={{ display: 'flex', justifyContent: 'space-between', px: 20, py: 4 }}>
            <Watch country="Nepal" />
            <Watch country="London" />
            <Watch country="HongKong" />
            <Watch country="Paris" />
          </Paper>


          <Paper sx={{ px: 20, pb: 4 }}>
            <Grid container spacing={3} >
              <Grid item xs={12} md={12} lg={8} >
                <Box sx={{ flexGrow: 1, pb: 2 }} >
                  <BlogCard />
                </Box>

              </Grid>
              <Grid item xs={12} md={12} lg={4} >
                <Box sx={{ flexGrow: 1, pb: 2 }} >
                  <AboutCard />
                </Box>
                <Box sx={{ flexGrow: 1, pb: 2 }} >
                  <NewsLetter />
                </Box>
              </Grid>
            </Grid>
          </Paper>

          
        </Paper>
      </Paper>
      <Paper sx={{bottom:'0', left:0, width:'100%'}}>
            <Footer />
          </Paper>
    </>
  )
}


export default Home
