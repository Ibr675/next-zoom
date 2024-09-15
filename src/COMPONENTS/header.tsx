import React from 'react'
import LINK from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-10 p-10 bg-red-400'> 
      <LINK href="\"> INTRODUCTION </LINK>
      <LINK href="\HOME"> HOME</LINK>
      <LINK href="\CONTACT"> CONTACT </LINK>
    </div>
  )
}

export default Header
