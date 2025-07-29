import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Stack} from '@mui/material'

const Resume = () => {
    return (
        <Stack direction="Column" spacing={2} className="ResumeCard tooltip">
            <a href="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/Portfolio%2Fcv.pdf?alt=media&token=464c5b79-0c2d-4b0a-abc1-67f3034c8903" target="_blank" rel='noreferrer'>
                <InsertDriveFileIcon fontSize='large'/>
            </a>
            <span class="tooltip_text">
            <p className="getInTouch">Resume</p>
            </span>
        </Stack>
    )
}

export default Resume