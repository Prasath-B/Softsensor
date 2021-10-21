import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <a className='navbar-heading' href="#">SoftSensor.ai</a>
            <Link to='/cart' className='navbar-link' >Go to Cart</Link>
        </div>
    )
}

export default Navbar
