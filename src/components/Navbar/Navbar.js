import React from 'react';
import UserSidebar from '../UserSidebar/UserSidebar';
import './Navbar.css';
import connectingArrows from '../Title/Logo.png';

const Navbar = ({onRouteChange, isSignedIn}) => {
	if (isSignedIn === true) {
	return (
		<div>
		<div className='nav'>
		<p id='logo' className='f3 link dim pa3 pointer'>Connect-a-Biz</p>
		<img className='f3 link dim pa3 pointer' src={connectingArrows} alt='connecting arrows' style={{height: 50, width: 50}} />
		<p onClick={() => onRouteChange('home')} className='f3 link dim pa3 pointer'>Home</p>
		<p onClick={() => onRouteChange('profile')} className='f3 link dim pa3 pointer'>My Account</p>
		<p onClick={() => onRouteChange('signin')} className='f3 link dim pa3 pointer'>Sign Out</p>
		</div>
		<UserSidebar />
		</div>
	)} else {
		return (
		<div className='nav'>
		<p id='logo' className='f3 link dim pa3 pointer'>Connect-a-Biz</p>
		<img className='f3 link dim pa3 pointer' src={connectingArrows} alt='connecting arrows' style={{height: 50, width: 50}} />
		<p onClick={() => onRouteChange('home')}className='f3 link dim pa3 pointer'>Home</p> 
		<p onClick={() => onRouteChange('signin')}className='f3 link dim pa3 pointer'>Sign In</p>
		<p onClick={() => onRouteChange('register')} className='f3 link dim pa3 pointer'>Register</p>
		</div>
		);
	}

}

export default Navbar;