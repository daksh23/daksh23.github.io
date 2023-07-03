import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Stack} from '@mui/material';

const Story = () => {

    const code = ">_ ";
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
                    👽 My self daksh, A passionate Computer Engineer & Software Developer from India, who currently living in Canada. 🎓 I completed A Bachelor of Engineering from Gujarat University, India ✍️ I’m currently learning Azure and Cloud computing. 🧑‍💻 I love writing code and learning anything about it
            </p>
        </Stack>
    )
}

export default Story