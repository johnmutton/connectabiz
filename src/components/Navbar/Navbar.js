import React from 'react';
import UserSidebar from '../UserSidebar/UserSidebar';
import './Navbar.css';
import connectingArrows from '../Title/Logo.png';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			route: this.props.route
		}
	}
		render() {
		if (this.props.isSignedIn === true && this.props.route === 'signedin') {
		return (
			<div>
		<div className='nav'>
		<p id='logo' className='f3 link dim pa3 pointer'>Connect-a-Biz</p>
		<img className='f3 link dim pa3 pointer' src={connectingArrows} alt='connecting arrows' style={{height: 50, width: 50}} />
		<p onClick={() => this.props.onRouteChange('home')} className='f3 link dim pa3 pointer'>Home</p>
		<p onClick={() => this.props.onRouteChange('signedin')} className='f3 link dim pa3 pointer'>My Account</p>
		<p onClick={() => this.props.onRouteChange('signin')} className='f3 link dim pa3 pointer'>Sign Out</p>
		</div>
		<UserSidebar route={this.state.route} />
		</div>
	)} else if (this.props.isSignedIn === true && this.props.route !== 'signedin') {
		return (
			<div className='nav'>
		<p id='logo' className='f3 link dim pa3 pointer'>Connect-a-Biz</p>
		<img className='f3 link dim pa3 pointer' src={connectingArrows} alt='connecting arrows' style={{height: 50, width: 50}} />
		<p onClick={() => this.props.onRouteChange('home')} className='f3 link dim pa3 pointer'>Home</p>
		<p onClick={() => this.props.onRouteChange('signedin')} className='f3 link dim pa3 pointer'>My Account</p>
		<p onClick={() => this.props.onRouteChange('signin')} className='f3 link dim pa3 pointer'>Sign Out</p>
		</div>
	)} else {
		return (
			<div className='nav'>
		<p id='logo' className='f3 link dim pa3 pointer'>Connect-a-Biz</p>
		<img className='f3 link dim pa3 pointer' src={connectingArrows} alt='connecting arrows' style={{height: 50, width: 50}} />
		<p onClick={() => this.props.onRouteChange('home')}className='f3 link dim pa3 pointer'>Home</p> 
		<p onClick={() => this.props.onRouteChange('signin')}className='f3 link dim pa3 pointer'>Sign In</p>
		<p onClick={() => this.props.onRouteChange('register')} className='f3 link dim pa3 pointer'>Register</p>
		</div>
		
	)}
}
}

export default Navbar;