import React from 'react'
import {  NavLink } from 'react-router-dom'
import logo from '../components/images/MAIN LOGO LIGHT BROWN@4x.png'
// import GoToTop from './GoToTop'


function Navbar() {
    
  return (
    // <!-- Top navigation -->
<nav className="navbar navbar-expand-md fixed-top top-nav">
	<div className="container-fluid">
		  <NavLink className="navbar-brand" to="/"><img className='main-logo' src={logo} alt='logo'/></NavLink>
		  <i className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"><img src="img/icons/menu.png" alt='icon'/></span>
		  </i>

		  <div className='collapse navbar-collapse' id="navbarSupportedContent">
		    <ul className="navbar-nav m-auto text-sm-center text-md-center">
		      <li className="nav-item" key={1}>
		        <NavLink className="nav-link" to='/#home'>Home <span className="sr-only">(current)</span></NavLink>
		      </li>
		      <li className="nav-item" key={2}>
		        <NavLink className="nav-link" to='/#services'>Services</NavLink>
		      </li>

		      <li className="nav-item" key={3}>
		        <NavLink className="nav-link" to='/#price'>Prices</NavLink>
		      </li>
		      <li className="nav-item" key={4}>
		        <NavLink className="nav-link" to='/#contact'>Appointment</NavLink>
		      </li>
		    </ul>
		  </div>	
		  {/* <ul className="navbar-nav ml-auto search-box">
		    <li className="nav-item" key={5}>
		      <Link className="nav-link" to='/'><i className="fa fa-search text-white"></i></Link>
		    </li>
		  </ul> */}
	</div>
	
</nav>
  )
}

export default Navbar