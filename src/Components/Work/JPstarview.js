import React from 'react'
import { Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { data } from '../Constant/data';

const JPstarview = () => {

  return (
    <Stack direction="column" spacing={2} className="JpstarviewCard">
        <h2> Freelance Software Developer </h2>
        <h3> {data.code} JP Starview Infosys </h3>
        <p> 
        {data.code} <LocationOnIcon fontSize='small' />Patan, Gujarat, India (GMT-4)
        </p>
        <p> {data.code} February 2021 to May 2021 </p>
        <p> {data.code} Technologies: MERN Stack </p>
    </Stack>
  )
}

export default JPstarview