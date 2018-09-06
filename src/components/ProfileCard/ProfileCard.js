import React from 'react';
import './ProfileCard.css';
import ProfileUserView from '../Profile/ProfileUserView';

class ProfileCard extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
			displayProfile: false,
			businessName: this.props.businessName,
			businessDescription: this.props.businessDescription,
			area: this.props.area
	}
}

	display_Profile = () => {
		this.setState({displayProfile: true})
	}


	render() {
	return (
		<div>
		{ this.state.displayProfile === false
		?
		<div id='profile-div'>
		<article onClick={this.display_Profile} className='dim link pa3 pointer shadow-3'>
		<h4>{this.state.businessName}</h4>
		<img 	
		id='business-profile' 
		src='https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg' 
		alt='#'
		/>
		<p>
			{this.state.businessDescription}
		</p>
		<p>
			{this.state.area}
		</p>
		</article>
  		</div>
		: <ProfileUserView
		businessName={this.state.businessName}
		businessDescription={this.state.businessDescription}
		area={this.state.area}
        />
	}
		</div>
		);
	}
}

export default ProfileCard;