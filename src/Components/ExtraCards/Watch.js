import React from 'react'
import {Stack} from '@mui/material'
import AnalogClock from 'analog-clock-react';

let options = {
  width: "200px",
  border: true,
  borderColor: "#1e1e1e",
  centerColor: "#2e2e2e",
  centerBorderColor: "#ffffff",
  handColors: {
    second: "yellow",
    minute: "#ffffff",
    hour: "#ffffff"
  }
};

const Watch = () => {
  return (
    <Stack direction="Column" spacing={2} className="WatchCard">
         <AnalogClock {...options} />
    </Stack>
  )
}

export default Watch