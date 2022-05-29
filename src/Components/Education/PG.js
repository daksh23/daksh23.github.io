import {Stack} from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DoneIcon from '@mui/icons-material/Done';

const PG = () => {

    const code = ">_ ";

    return (
        <Stack direction="column" spacing={2} className="PGCard">
            <h3>
                Post Graduation
            </h3>
            <h4>
                {code}
                Mobile Solutions Development
            </h4>
            <p>
                {code}
                Conestoga College Institute of Technology
            </p>
            <p>
                {code}
                <LocationOnIcon fontSize='small'/>
                Waterloo, ON, Canada (GMT-4)
            </p>
            <p>
            {code}
            <DoneIcon color="success" fontSize="small"/>
            Completed 2022 </p>
            <p>
                {code}
                CGPA: 3.83 (out of 4)
            </p>
        </Stack>
    )
}

export default PG