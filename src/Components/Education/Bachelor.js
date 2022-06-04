import {Stack} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';

const Bachelor = () => {

    const code = ">_ ";

    return (
        <Stack direction="column" spacing={2} className="BachelorCard">
            <h2>
                Bachelor of Engineering
            </h2>
            <h4>
                {code}
                Computer Engineering
            </h4>
            <p>
                {code}
                Smt. S.R.Patel Engineering College
            </p>
            <p>
                {code}
                <LocationOnIcon fontSize='small'/>
                Unjha, Gujarat, India (GMT-4)
            </p>
            <p>
                {code}
                <DoneIcon color="success" fontSize="small"/>
                Completed 2019
            </p>
            <p>
                {code}
                CGA: 8.48( out of 10)
            </p>
        </Stack>
    )
}

export default Bachelor