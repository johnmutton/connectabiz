import React from 'react';
import ProfileCard from '../ProfileCard/ProfileCard';
import './SearchInputs.css';

class SearchInputs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedCategory: 'Select category',
			selectedArea: '',
			renderProfileCard: false,
		}
	}

onCategorySelect = (event) => {
	this.setState({selectedCategory: event.target.value})
}

onAreaSelect = (event) => {
	this.setState({selectedArea: event.target.value})
}

onSearchSubmit = () => {
	if (this.state.selectedCategory === this.props.category) {
	this.setState({renderProfileCard: true});
} else {
	this.setState({renderProfileCard: false});
}
}



	render() {
	return (
		<div>
		<div className='center f3 black pa4'>
		<label className='pa2'>I'm looking for</label>
		<select onChange={this.onCategorySelect}>
		<option>Select a service category</option>
    	<option>Animal Care</option>
    	<option>Arts & Entertainment</option>
    	<option>Baby and Kids</option>
    	<option>Construction</option>
    	<option>Computers & Electronics</option>
    	<option>Fashion</option>
    	<option>Finance & Legal Services</option>
    	<option>Food</option>
    	<option>Hair & Beauty</option>
    	<option>Sports & Fitness</option>
    	<option>Other Services</option>
    	</select>
		<label className='pa2'>in</label>
		<select onChange={this.onAreaSelect}>
		<option>Select a location</option>
    	<option>Bedfordshire</option>
		<option>Berkshire</option>
		<option>Bristol</option>
		<option>Buckinghamshire</option>
		<option>Cambridgeshire</option>
		<option>Cheshire</option>
		<option>City of London</option>
		<option>Cornwall</option>
		<option>Cumbria</option>
		<option>Derbyshire</option>
		<option>Devon</option>
		<option>Dorset</option>
		<option>Durham</option>
		<option>East Riding of Yorkshire</option>
		<option>East Sussex</option>
		<option>Essex</option>
		<option>Gloucestershire</option>
		<option>Greater London</option>
		<option>Greater Manchester</option>
		<option>Hampshire</option>
		<option>Herefordshire</option>
		<option>Hertfordshire</option>
		<option>Isle of Wight</option>
		<option>Kent</option>
		<option>Lancashire</option>
		<option>Leicestershire</option>
		<option>Lincolnshire</option>
		<option>Merseyside</option>
		<option>Norfolk</option>
		<option>North Yorkshire</option>
		<option>Northamptonshire</option>
		<option>Northumberland</option>
		<option>Nottinghamshire</option>
		<option>Oxfordshire</option>
		<option>Rutland</option>
		<option>Shropshire</option>
		<option>Somerset</option>
		<option>South Yorkshire</option>
		<option>Staffordshire</option>
		<option>Suffolk</option>
		<option>Surrey</option>
		<option>Tyne and Wear</option>
		<option>Warwickshire</option>
		<option>West Midlands</option>
		<option>West Sussex</option>
		<option>West Yorkshire</option>
		<option>Wiltshire</option>
		<option>Worcestershire</option>
		</select>
		<button onClick={this.onSearchSubmit}>Search</button>
		</div>
		<div>
		{this.state.renderProfileCard && <ProfileCard hideSearchInputs={this.hideSearchInputs} />}
		</div>
		</div>
		);
}
}

export default SearchInputs;