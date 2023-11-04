import React from 'react'
import {Stack} from '@mui/material'

const Certification = () => {
    return (
        <Stack direction="row" className='certiCard' spacing={2}>
            <div className='SkillDiv'>
                <Stack direction="column" spacing={2}>
                    <div className='SkillBtn'>
                        <img src="/images/az900.png" alt='az900' className='SkillImg'/>
                    </div>
                </Stack>
            </div>
        </Stack>
    )
}

export default Certification