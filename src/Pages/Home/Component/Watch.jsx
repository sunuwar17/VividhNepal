import React from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { Box } from '@mui/material';


function Watch4({country}) {
  const [givenTime, setGivenTime] = React.useState();

  React.useEffect(() => {
   if(country === "Nepal") setInterval(() => setGivenTime(new Date(new Date().toISOString().slice(0, -1))), 1000);
    if(country === "London") setInterval(() => setGivenTime(new Date(new Date().toISOString().slice(0, -1) + '-02:15')), 1000);
    if(country === "HongKong") setInterval(() => setGivenTime(new Date(new Date().toISOString().slice(0, -1) + '-04:15')), 1000);
    if(country === "Paris") setInterval(() => setGivenTime(new Date(new Date().toISOString().slice(0, -1) + '-06:15')), 1000);
  }, [country]);

  return (
    <>
      <Box textAlign={'center'}>
        <Clock value={givenTime} />
        <p style={{ textAlign: 'center' }}>{country}</p>
      </Box>

    </>
  );
}
export default Watch4