import React from 'react'

const Button = ({buttonText,handleFIlter,sideLink }) => {


  return (
    <div className='Button fw-light'>
      <div className={buttonText === sideLink ? "color3 active": 'color1'} onClick={()=>{handleFIlter(buttonText)}} style={{cursor:'pointer'}}>
        {buttonText}
      </div>
    </div>
  )
}

export default Button