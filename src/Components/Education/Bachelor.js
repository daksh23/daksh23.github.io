import {Stack} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import { data } from '../Constant/data';

const Bachelor = () => {

    return (
        <Stack direction="column" spacing={2} className="BachelorCard">
            <h2>
                {data.heading.Education.BE}
            </h2>
            <h4>
                {data.code}
                Computer Engineering
            </h4>
            <p>
                {data.code}
                Smt. S.R.Patel Engineering College
            </p>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                Unjha, Gujarat, India (GMT-4)
            </p>
            <p>
                {data.code}
                <DoneIcon color="success" fontSize="small"/>
                Completed 2019
            </p>
            <p>
                {data.code}
                CGA: 8.48( out of 10)
            </p>
        </Stack>
    )
}

export default Bachelor