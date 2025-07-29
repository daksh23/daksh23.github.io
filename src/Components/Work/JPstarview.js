import React from 'react'
import { Stack } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { data } from '../Constant/data';

const JPstarview = () => {

  return (
    <Stack direction="column" spacing={2} className="JpstarviewCard">
        <h2> {data.heading.Work.Jp.Role} </h2>
        <h3> {data.code} {data.heading.Work.Jp.Title} </h3>
        <p> 
        {data.code} <LocationOnIcon fontSize='small' />{data.heading.Work.Jp.Location}
        </p>
        <p> {data.code} {data.heading.Work.Jp.startYear} to {data.heading.Work.Jp.endYear} </p>
    </Stack>
  )
}

export default JPstarview