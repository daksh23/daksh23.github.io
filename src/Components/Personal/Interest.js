import { Stack } from '@mui/material'
import React from 'react'
import BookIcon from '@mui/icons-material/Book';
import MovieIcon from '@mui/icons-material/Movie';
import SportsCricketIcon from '@mui/icons-material/SportsCricket';
import PaidIcon from '@mui/icons-material/Paid';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { data } from '../Constant/data';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CasinoIcon from '@mui/icons-material/Casino';

const Interest = () => {

  return (
    <Stack direction="column" spacing={2} className="InterestCard">
        <h2
                style={{
                padding: 0,
                margin: 0
            }}>
            {data.heading.Interest}
        </h2>

        <p className='InterestList'>
            {data.interest.Title}
        </p>
        <p> {data.code}
        <MovieIcon fontSize='small'/> {data.interest.Book} </p>
        <p> {data.code}
        <MovieIcon fontSize='small'/> {data.interest.MovieAndSeries} </p>
        <p> {data.code}
        <MovieIcon fontSize='small'/> {data.interest.Anime} </p>
        <p>{data.code} 
        <MusicNoteIcon /> {data.interest.Music}</p>
        <p> {data.code} 
        <SportsCricketIcon fontSize='small' /> {data.interest.Sports} </p>
        <p>{data.code} 
        <PaidIcon fontSize='small' /> {data.interest.Treading} </p>
        <p>{data.code} 
        <HighlightOffIcon fontSize='small' /> {data.interest.Drones} </p>
        <p>{data.code} 
        <CasinoIcon fontSize='small' /> {data.interest.Games} </p>
    </Stack>
  )
}

export default Interest