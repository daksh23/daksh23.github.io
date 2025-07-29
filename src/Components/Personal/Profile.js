import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { data } from '../Constant/data';

const Profile = () => {

    return (
        <Stack direction="column" spacing={2} className="ProfileCard">
            <Avatar
                alt="Daksh"
                sx={{
                width: 150,
                height: 150
            }}
                src="/images/avtar_con.png"/>
            <h3>
                {data.code}
                 Hi there, My name is Daksh
            </h3>
            <p>
                {data.code}
                Software Engineer
            </p>
            <p>
                {data.code}
                <LocationOnIcon fontSize='small'/>
                Toronto, ON, Canada (GMT-4)
            </p>
            <p> {data.code} © 2025 made by me, All Rights Reserved</p>
        </Stack>
    )
}

export default Profile