import React from 'react'
import { data } from '../Constant/data'

export const WebVersion = () => {
  return (
        <h2 className='BetaLabel'> 
          {data.version}
        </h2>
  )
}
