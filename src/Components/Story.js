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

                š½ I'm a young developer looking for creative and world-changing projects. I was
                born in India and I am currently living in Canada. š I completed my Bachelor of
                Engineering from Gujarat University, India and Post graduation from Conestoga
                College, waterloo āļø Iām currently learning Aws and Cloud computing. š§āš» I
                love writing code and learn anythings about it
            </p>
        </Stack>
    )
}

export default Story