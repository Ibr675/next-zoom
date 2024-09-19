import React from 'react'
import LINK from 'next/link'
const footer = () => {
  return (
    <div className='flex gap-6 p-6 bg-red-400'> 
      <LINK href="\"> OUR   </LINK>
      <LINK href="\HOME"> JOURNEY </LINK>
      <LINK href="\CONTACT"> BEGINS </LINK>
      <LINK href="\BUSNESS"> HEAR </LINK>
    </div>
  )
}

export default footer