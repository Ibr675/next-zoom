import React from 'react'
import LINK from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-10 p-10 bg-red-400'> 
      <LINK href="\"> INTRIDUCTION PAGE </LINK>
      <LINK href="\HOME"> HOME PAGE </LINK>
      <LINK href="\CONTACT"> CONTACT PAGE </LINK>
    </div>
  )
}

export default Header
