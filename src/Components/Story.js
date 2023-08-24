import React from 'react'
import {Stack} from '@mui/material';
import {data} from '../Constant/data'

const Story = () => {

    return (
        <Stack className="StoryCard">
            <h2
                style={{
                padding: 0,
                margin: 0
            }}>
                Story
            </h2>
            <p className='Story'>
                  {data.code} {data.textIcon.alien}  My self daksh, A passionate Computer Engineer & Software Developer from India, who currently living in Canada. {data.textIcon.degree} I completed A Bachelor of Engineering from Gujarat University, India {data.textIcon.writing} I’m currently learning Azure and Cloud computing. {data.textIcon.codeBoy} I love writing code and learning anything about it
            </p>
        </Stack>
    )
}

export default Story