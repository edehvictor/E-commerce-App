  import React from 'react'

  const Footer = () => {
      const getDate =new Date()
    return (
      <div className='footer text-center p-3 fs-5'>
          <span>&#169; {getDate.getFullYear()}<span className='color3'>ComfySloth.</span>Designed with 💖💖 by VHickTHor</span>
      </div>
    )
  }

  export default Footer