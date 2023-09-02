import React from 'react'
import { data } from '../Constant/data'

const WebVersion = () => {
  return (
        <h2 className='BetaLabel'> 
          {data.version}
        </h2>
  )
}

export default WebVersion;