import {Stack} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';
import { data } from '../../Constant/data';

const PG = () => {

    const code = ">_ ";

    return (
        <Stack direction="column" spacing={2} className="PGCard">
            <h2>
                Post Graduation
            </h2>
            <h4>
                {data.code}
                Mobile Solutions Development
            </h4>
            <p>
                {data.code}
                Conestoga College Institute of Technology
            </p>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                Waterloo, ON, Canada (GMT-4)
            </p>
            <p>
            {data.code}
            <DoneIcon color="success" fontSize="small"/>
            Completed 2022 </p>
            <p>
                {data.code}
                CGPA: 3.83 (out of 4)
            </p>
        </Stack>
    )
}

export default PG