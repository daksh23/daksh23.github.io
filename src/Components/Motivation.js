import React from 'react'
import { Stack } from '@mui/material'
import { Quote } from '../Data'
import { data } from '../Constant/data'

const Motivation = () => {
    
    return (
    <Stack direction="column" spacing={2} className="MotivationCard">
        <h2> Quote <span> {data.textIcon.writing} </span> </h2>
        <p> {data.code} "{Quote}" </p>
    </Stack>
  )
}

export default Motivation