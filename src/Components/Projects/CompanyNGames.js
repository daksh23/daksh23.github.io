import { Stack } from '@mui/material'
import React from 'react'
import { data } from '../../Constant/data'

const CompanyNGames = () => {
  return (
    <Stack direction="column" spacing={2} className="GamesCard">
        <h2>FunFriday <span className='GreenDot'>{data.textIcon.greenDot}</span></h2>
        <img
                src="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/FunFriday.png?alt=media&token=c40a832e-8762-4989-bf58-fdf8d1968973"
                alt="CompanyNGames"
                width="auto"
                height="200px"/>
    </Stack>
  )
}

export default CompanyNGames