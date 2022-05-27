import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Stack} from '@mui/material';

const Story = () => {

    const code = ">_ ";
    return (
        <Stack sx={{
            maxWidth: 300
        }} className="StoryCard">
            <h2
                style={{
                padding: 0,
                margin: 0
            }}>
                Story
            </h2>
            <p className='Story'>

                👽 I'm a young developer looking for creative and world-changing projects. I was
                born in India and I am currently living in Canada. 🎓 I completed my Bachelor of
                Engineering from Gujarat University, India and Post graduation from Conestoga
                College, waterloo ✍️ I’m currently learning Aws and Cloud computing. 🧑‍💻 I
                love writing code and learn anythings about it
            </p>
        </Stack>
    )
}

export default Story