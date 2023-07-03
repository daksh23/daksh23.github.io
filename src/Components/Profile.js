import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Profile = () => {

    const code = ">_" + " ";

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
                {code}
                 Hi there, My name is Daksh
            </h3>
            <p>
                {code}
                Computer Engineer and Software Developer
            </p>
            <p>
                {code}
                <LocationOnIcon fontSize='small'/>
                Waterloo, ON, Canada (GMT-4)
            </p>
            <p> {code} © 2023 made by me, All Rights Reserved</p>
        </Stack>
    )
}

export default Profile