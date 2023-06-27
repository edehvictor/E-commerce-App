import React from 'react'
import Button from './Button'

const Buttons = ({ handleFIlter, sideLink }) => {


  return (
    <div className='my-1'>

      <h4 className='color2'>Category</h4>
      <Button
        buttonText='All'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
      <Button
        buttonText='office'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
      <Button
        buttonText='kitchen'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
      <Button
        buttonText='living room'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
      <Button
        buttonText='dining'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
      <Button
        buttonText='bedroom'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
      <Button
        buttonText='kids'
        sideLink={sideLink}
        handleFIlter={handleFIlter}
      />
    </div>
  )
}

export default Buttons