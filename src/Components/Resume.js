import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Stack} from '@mui/material'

const Resume = () => {
  return (
    <Stack direction="Column" spacing={2} className="ResumeCard">
         <a href="" target = "_blank">
           <InsertDriveFileIcon fontSize='large'/>
         </a>
    </Stack>
  )
}

export default Resume