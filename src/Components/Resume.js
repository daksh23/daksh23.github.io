import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Stack} from '@mui/material'

const Resume = () => {
  return (
    <Stack direction="Column" spacing={2} className="ResumeCard">
         <a href="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/Latest_Daksh_Patel.pdf?alt=media&token=e0b7a1fa-90bb-4ed6-b5b7-1b2f6c016a1b" target = "_blank">
           <InsertDriveFileIcon fontSize='large'/>
         </a>
    </Stack>
  )
}

export default Resume