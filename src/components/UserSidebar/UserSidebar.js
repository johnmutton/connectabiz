import React from 'react';
import EditCard from '../EditCard/EditCard';
import EditSite from '../EditSite/EditSite';
import DeleteAccount from '../DeleteAccount/DeleteAccount';
import './UserSidebar.css';

class UserSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userRoute: 'home'
		}
	}

userRouteChange = (route) => {
	if (route === 'editCard') {
		this.setState({userRoute: 'editCard'})
		console.log(route);
	} 
	else if (route === 'editSite') {
		this.setState({userRoute: 'editSite'})
		console.log(route);
	} 
	else if (route === 'delete') {
		this.setState({userRoute: 'delete'})
		console.log(route);
	}
}

	render() {
	return (
		<div>
		<div className='side'>
		<p onClick={() => this.userRouteChange('editCard')} className='f4 link dim pa3 pointer'>Edit Profile Card</p>
		<p onClick={() => this.userRouteChange('editSite')} className='f4 link dim pa3 pointer'>Edit Profile Site</p>
		<p onClick={() => this.userRouteChange('delete')} className='f4 link dim pa3 pointer'>Delete Account</p>
		</div>
		{ this.state.userRoute === 'delete'
		?
		<DeleteAccount  />
		: ( this.state.userRoute === 'editSite'
		? <EditSite />
		: <EditCard />
		)
		}
		</div>
	);
}
}

export default UserSidebar;