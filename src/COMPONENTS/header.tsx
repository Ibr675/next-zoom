import React from 'react'
import LINK from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-8 p-6 bg-blue-400'> 
      <LINK href="\">INTRIDUCTION PAGE</LINK>
      <LINK href="\HOME">HOME PAGE</LINK>
      <LINK href="\CONTACT">CONTACT PAGE</LINK>
    </div>
  )
}

export default Header
