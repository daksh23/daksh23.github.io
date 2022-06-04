import React from 'react'
import { Stack } from '@mui/material'
import { Quote } from '../Data'

const Motivation = () => {
    
    const code = ">_ " + " ";

    return (
    <Stack direction="column" spacing={2} className="MotivationCard">
        <h2> Quote ✍️ </h2>
        <p> {code} "{Quote}" </p>
    </Stack>
  )
}

export default Motivation