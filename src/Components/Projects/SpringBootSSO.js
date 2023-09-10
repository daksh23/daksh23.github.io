import { Stack } from '@mui/material'
import React from 'react'
import { data } from '../Constant/data'

const SpringBootSSO = () => {
  return (
    <Stack direction="column" spacing={1} className="SSOCard">
        <h2>{data.heading.Projects.SpringBootSSO}<span className='GreenDot'>{data.textIcon.greenDot}</span></h2>
        <img
                src="https://firebasestorage.googleapis.com/v0/b/images-af837.appspot.com/o/springBootSSO%2Flogin_with_sso.png?alt=media&token=18b8bf61-e5f6-49e2-b674-2cfccc2d077c"
                alt="Spring-Boot-SSO"
                width="auto"
                height="200px"/>
    </Stack>
  )
}

export default SpringBootSSO;