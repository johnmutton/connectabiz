import React from 'react';
import EditAccount from '../EditAccount/EditAccount';
import EditCard from '../EditCard/EditCard';
import EditSite from '../EditSite/EditSite';
import './UserSidebar.css';

class UserSidebar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userRoute: 'editAccount',
			businessName: '',
			businessImage: '',
			businessDescription: '',
			area: []
		}
	}

businessNameChange = (data) => {
	this.setState({businessName: data})
}

businessImageChange = (data) => {
	this.setState({businessImage: data})
}

businessDescriptionChange = (data) => {
	this.setState({businessDescription: data})
}

areaChange = (data) => {
	this.setState({area: data})
}

userRouteChange = (route) => {
	if (route === 'editCard') {
		this.setState({userRoute: 'editCard'})
	} 
	else if (route === 'editSite') {
		this.setState({userRoute: 'editSite'})
	}
	else if (route === 'editAccount') {
		this.setState({userRoute: 'editAccount'})
	}
}
	
	renderUserSwitch = () => {
	switch(this.state.userRoute) {
		case 'editAccount':
		return (<EditAccount 
				businessNameChange={this.businessNameChange}
				areaChange={this.areaChange}
				/>);
		case 'editCard':
		return (<EditCard 
				businessName={this.state.businessName} 
				area={this.state.area}
				businessImage={this.state.businessImage}
				businessDescription={this.state.businessDescription}
				businessImageChange={this.businessImageChange}
				businessDescriptionChange={this.businessDescriptionChange}
				/>);
		case 'editSite':
		return (<EditSite
				businessName={this.state.businessName}
				/>);
			}
		}

	render() {
	return (
		<div>
		<div className='side'>
		<p onClick={() => this.userRouteChange('editAccount')} className='f4 link dim pa3 pointer'>Edit account info</p>
		<p onClick={() => this.userRouteChange('editCard')} className='f4 link dim pa3 pointer'>Edit Profile Card</p>
		<p onClick={() => this.userRouteChange('editSite')} className='f4 link dim pa3 pointer'>Edit Profile Site</p>
		</div>
		{this.renderUserSwitch(this.state.userRoute)}
		</div>
	);
}
}

export default UserSidebar;