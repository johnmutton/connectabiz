import React from 'react';
import './ProfileCard.css';
import ProfileUserView from '../Profile/ProfileUserView';

class ProfileCard extends React.Component {
	constructor(props) {
	super(props);
		this.state = {
			displayProfile: false,
			businessName: this.props.businessName,
			businessImage: this.props.businessImage,
			businessDescription: this.props.businessDescription,
			area: this.props.area,
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
		src={this.state.businessImage} 
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
		businessImage={this.state.businessImage}
		businessDescription={this.state.businessDescription}
        />
	}
		</div>
		);
	}
}

export default ProfileCard;