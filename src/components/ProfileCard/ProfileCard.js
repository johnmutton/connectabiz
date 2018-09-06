import React from 'react';
import './ProfileCard.css';
import ProfileUserView from '../Profile/ProfileUserView';

class ProfileCard extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
			displayProfile: false,
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
		<h4>{this.props.businessName}</h4>
		<img 	
		id='business-profile' 
		src='https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg' 
		alt='#'
		/>
		<p>
			{this.props.businessDescription}
		</p>
		<p>
			{this.props.area}
		</p>
		</article>
  		</div>
		: <ProfileUserView />
	}
		</div>
		);
	}
}

export default ProfileCard;