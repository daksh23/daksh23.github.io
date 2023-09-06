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
                Interest
        </h2>

        <p className='InterestList'>
            {data.Interest.Title}
        </p>
        <p> {data.code} 
        <BookIcon fontSize='small'/> {data.Interest.Book} </p>
        <p> {data.code}
        <MovieIcon fontSize='small'/> {data.Interest.Book} </p>
        <p> {data.code}
        <MovieIcon fontSize='small'/> {data.Interest.MovieAndSeries} </p>
        <p>{data.code} 
        <MusicNoteIcon /> {data.Interest.Music}</p>
        <p> {data.code} 
        <SportsCricketIcon fontSize='small' /> {data.Interest.Sports} </p>
        <p>{data.code} 
        <PaidIcon fontSize='small' /> {data.Interest.Treading} </p>
        <p>{data.code} 
        <HighlightOffIcon fontSize='small' /> {data.Interest.Drones} </p>
        <p>{data.code} 
        <CasinoIcon fontSize='small' /> {data.Interest.Games} </p>
    </Stack>
  )
}

export default Interest