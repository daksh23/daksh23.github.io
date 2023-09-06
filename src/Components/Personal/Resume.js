import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Stack} from '@mui/material'

const Resume = () => {
    return (
        <Stack direction="Column" spacing={2} className="ResumeCard tooltip">
            <a href="https://daksh23.github.io" target="_blank" rel='noreferrer'>
                <InsertDriveFileIcon fontSize='large'/>
            </a>
            <span class="tooltip_text">
            <p className="getInTouch">Resume</p>
            </span>
        </Stack>
    )
}

export default Resume