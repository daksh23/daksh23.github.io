import {Stack} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import { data } from '../Constant/data';

const PG = () => {

    return (
        <Stack direction="column" spacing={2} className="PGCard">
            <h2>
                {data.heading.Education.PG.Title}
            </h2>
            <h4>
                {data.code}
                {data.heading.Education.PG.College}
            </h4>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                {data.heading.Education.PG.Location}
            </p>
            <p>
            {data.code}
            <DoneIcon color="success" fontSize="small"/>
                Completed {data.heading.Education.PG.Year} </p>
            <p>
                {data.code}
                CGPA: {data.heading.Education.PG.CGA}
            </p>
        </Stack>
    )
}

export default PG