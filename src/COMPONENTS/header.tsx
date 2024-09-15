import React from 'react'
import LINK from 'next/link'
const Header = () => {
  return (
    <div className='flex gap-5 p-5 bg-red-400'> 
      <LINK href="\"> INTRODUCTION </LINK>
      <LINK href="\HOME"> HOME</LINK>
      <LINK href="\CONTACT"> CONTACT </LINK>
      <LINK href="\BUSNESS"> BUSNESS </LINK>
    </div>
  )
}

export default Header
