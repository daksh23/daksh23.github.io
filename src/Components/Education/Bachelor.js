import {Stack} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import { data } from '../Constant/data';

const Bachelor = () => {

    return (
        <Stack direction="column" spacing={2} className="BachelorCard">
            <h2>
                {data.heading.Education.BE.Title}
            </h2>
            <h4>
                {data.code}
                {data.heading.Education.BE.College}
            </h4>
            <p>
                {data.code}
                {data.heading.Education.BE.Location}
            </p>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                {data.heading.Education.BE.Location}
            </p>
            <p>
                {data.code}
                <DoneIcon color="success" fontSize="small"/>
                Completed {data.heading.Education.BE.Year}
            </p>
            <p>
                {data.code}
                CGA: {data.heading.Education.BE.CGA}
            </p>
        </Stack>
    )
}

export default Bachelor