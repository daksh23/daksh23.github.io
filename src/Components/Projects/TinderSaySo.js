import {Stack} from '@mui/material'
import React from 'react'
import { data } from '../Constant/data'

const TinderSaySo = () => {
    return (
        <Stack direction="column" spacing={1} className="TinderSaySoCard">
            <h2>TinderSay<span className='GreenDot'>{data.textIcon.greenDot}</span></h2>
            <img
                src="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/TinderSay%2FScreenshot%201943-04-26%20at%2011.19.10%20AM.png?alt=media&token=39714455-361d-4f2a-872a-0fdbd7681b9e"
                alt="Tinder Say So"
                width="auto"
                height="200px"/>
        </Stack>
    )
}

export default TinderSaySo