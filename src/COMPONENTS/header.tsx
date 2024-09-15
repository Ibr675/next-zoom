import React from 'react'
import LINK from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-10 p-10 bg-red-400'> 
      <LINK href="\"> LIKE </LINK>
      <LINK href="\HOME"> SHEAR </LINK>
      <LINK href="\CONTACT"> SUBSCRIBE </LINK>
    </div>
  )
}

export default Header
