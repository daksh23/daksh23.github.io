import React from 'react'
import {Stack} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { data } from '../Constant/data';

const Zorens = () => {

    return (
        <Stack direction="column" spacing={2} className="ZorensCard">
            <h2>
                {data.heading.Work.Zorens.Role}
            </h2>
            <h3>
                {data.code}
                {data.heading.Work.Zorens.Title}
            </h3>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                {data.heading.Work.Zorens.Location}
            </p>
            <p>
                {data.code}
                {data.heading.Work.Zorens.startYear} to {data.heading.Work.Zorens.endYear}
            </p>
        </Stack>
    )
}

export default Zorens