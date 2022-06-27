import React from 'react'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import {Stack} from '@mui/material'

const Resume = () => {
  return (
    <Stack direction="Column" spacing={2} className="ResumeCard">
         <a href="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/Daksh_Patel_CV.pdf?alt=media&token=4194a67a-e34d-4e64-a7e1-40d388f5aceb" target = "_blank">
           <InsertDriveFileIcon fontSize='large'/>
         </a>
    </Stack>
  )
}

export default Resume