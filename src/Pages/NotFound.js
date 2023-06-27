import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='not-found'>
            <h3 className='color2'>This page does not exist!</h3>
            <Link to='/'>
                <button type="button" className="btn btn-primary btn-lg p-4" >Redirect to the home page.</button>
            </Link>
        </div>
    )
}

export default NotFound