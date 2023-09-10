import React from 'react'
import {Stack} from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { data } from '../Constant/data';

const Zorens = () => {

    return (
        <Stack direction="column" spacing={2} className="ZorensCard">
            <h2>
                {data.heading.Work.Zorens}
            </h2>
            <h3>
                {data.code}
                Jr. Software Developer
            </h3>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                Mehsana, Gujarat, India (GMT-4)
            </p>
            <p>
                {data.code}
                June 2019 to October 2020
            </p>
            <p>
                {data.code}
                Technologies: MERN Stack and Android
            </p>
        </Stack>
    )
}

export default Zorens