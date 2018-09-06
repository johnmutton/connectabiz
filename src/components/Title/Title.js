import React from 'react';
import connectingArrows from './Logo.png';
import './Title.css'

const Title = () => {
	return (
		<div className='center'>
		<h1 className='pa3'>Connect-a-Biz</h1>
		<img className='pa3' src={connectingArrows} alt='connecting arrows' style={{height: 50, width: 50}}/>
		<h2 className='pa3'> Find a local service to suit your needs</h2>
		</div>
	);
}

export default Title;