import React from 'react';
import './SearchInputs.css';

const SearchInputs = () => {
	return (
		<div className='center f3 black pa4'>
		<label className='pa2'>I'm looking for</label>
		<select>
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
		<select>
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
		<button type='submit'>Search</button>
 		</div>
	);
}

export default SearchInputs;