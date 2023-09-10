import React from 'react'
import {Stack} from '@mui/material'

const Skills = () => {
    return (
        <Stack direction="row" className='SkillCard' spacing={2}>

            <div className='SkillDiv'>
                <Stack direction="column" spacing={2}>
                    <div className='SkillBtn'>
                        <img src="/images/swift.png" alt='swift' className='SkillImg'/>
                    </div>
                    <div className='SkillBtn'>
                        <img src="/images/mongodb.png" alt='monogodb' className='SkillImg'/>
                    </div>
                </Stack>
            </div>

            <div className='SkillDiv'>
                <Stack direction="column" spacing={2}>
                <div className='SkillBtn'>
                        <img src="/images/java.png" alt='java' className='SkillImg'/>
                    </div>
                    <div className='SkillBtn'>
                        <img src="/images/csharp.png" alt='c#' className='SkillImg'/>
                    </div>
                    <div className='SkillBtn'>
                        <img src="/images/react.png" alt='react' className='SkillImg'/>
                    </div>
                    <div className='SkillBtn'>
                        <img src="/images/node.png" alt='node' className='SkillImg'/>
                    </div>
                </Stack>
            </div>

            <div className='SkillDiv'>
                <Stack direction="column" spacing={2}>
                    <div className='SkillBtn'>
                        <img src="/images/xd.png" alt='xd' className='SkillImg'/>
                    </div>

                    <div className='SkillBtn'>
                        <img src="/images/js.png" alt='js' className='SkillImg'/>
                    </div>

                    <div className='SkillBtn'>
                        <img src="/images/mi.png" alt='mi' className='SkillImg'/>
                    </div>

                    <div className='SkillBtn'>
                        <img src="/images/figma.png" alt='figma' className='SkillImg'/>
                    </div>

                    <div className='SkillBtn'>
                        <img src="/images/veracode.webp" alt='veracode' className='SkillImg'/>
                    </div>
                </Stack>
            </div>

            <div className='SkillDiv'>
                <Stack direction="column" spacing={2}>
                    <div className='SkillBtn'>
                        <img src="/images/python.png" alt='python' className='SkillImg'/>
                    </div>
                    <div className='SkillBtn'>
                        <img src="/images/firebase.png" alt='firebase' className='SkillImg'/>
                    </div>

                    <div className='SkillBtn'>
                        <img src="/images/git.png" alt='git' className='SkillImg'/>
                    </div>

                    <div className='SkillBtn'>
                        <img src="/images/spring-boot.png" alt='spring-boot' className='SkillImg'/>
                    </div>
                </Stack>
            </div>

            <div className='SkillDiv'>
                <Stack direction="column" spacing={2}>
                    <div className='SkillBtn'>
                        <img src="/images/angular.png" alt='angular' className='SkillImg'/>
                    </div>
                    <div className='SkillBtn'>
                        <img src="/images/sql.png" alt='sql' className='SkillImg'/>
                    </div>
                </Stack>
            </div>

        </Stack>
    )
}

export default Skills