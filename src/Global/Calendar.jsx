import React from 'react'
import { Paper,Box } from "@mui/material";


function Calendar() {
  return (
    <Box>
        <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FKathmandu&title=Calendar&src=c3VudXdhci5zaGVraGFyMDRAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4tZ2IubnAjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
     border="solid 1px #777" width="500" height="400" frameBorder="0" scrolling="no">
     </iframe>
    </Box>
  )
}

export default Calendar