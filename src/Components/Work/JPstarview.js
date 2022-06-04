import React from 'react'
import { Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';

const JPstarview = () => {

    const code = ">_ " + "";

  return (
    <Stack direction="column" spacing={2} className="JpstarviewCard">
        <h2> Jr. Software Developer </h2>
        <h3> {code} JP Starview Infosys </h3>
        <p> 
        {code} <LocationOnIcon fontSize='small' /> Patan, Gujarat, India (GMT-4)
        </p>
        <p> {code} October 2019 to December 2020 </p>
        <p> {code} Technologies: MERN Stack </p>
    </Stack>
  )
}

export default JPstarview