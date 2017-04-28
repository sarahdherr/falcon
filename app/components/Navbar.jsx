import React from 'react'
import { Link } from 'react-router'

export default (props) => {
  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand" href="#">Navbar</a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className='nav-link' to='/login'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/profile'>Profile</Link>
          </li>
          <li className="nav-item">
            <Link className='nav-link' to='/log'>Log</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
