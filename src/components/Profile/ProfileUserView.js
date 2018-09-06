import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ProfileUserView.css';

const ProfileUserView = (props) => {
	return (
<div>
	<div className='center'> 
		<h1>{props.businessName}</h1>
	</div>
	<div id='info'>
	<h3 className='underline'>Info</h3>
	<h5>{props.businessDescription}</h5>
	<img  
		src='https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg' 
		alt='Business Profile' 
		id='businessProfilePicture'
	/>
	</div>

	<Tabs>
	<div>
		<TabList className='tab'>
			<Tab>Opening Hours</Tab>
			<Tab>Menu</Tab>
			<Tab>Contact</Tab>
			<Tab>Gallery</Tab>
			<Tab>Offers</Tab>
			<Tab>External Links</Tab>
		</TabList>

		<TabPanel className='center'>
			<h2>
			Opening Hours
			Mon - 9 - 6
			Tues - 9 - 6
			Wed - 9 - 6
			Thurs - 9 - 6
			Fri - 9 - 6
			</h2>
		</TabPanel>

		<TabPanel className='center'>
			<h2>This is the Menu for this business</h2>
		</TabPanel>

		<TabPanel className='center'>
			<h2>Call us on 070000000000
				Email us on info@jmdevs.com
			</h2>
		</TabPanel>

		<TabPanel className='center' id='gallery'>
			<img style={{height: 150, width: 'auto'}} src='https://qph.fs.quoracdn.net/main-qimg-d39a9d88c5bd1d9c6a7c4674e61491b2' alt='businessimage'/>
			<img style={{height: 150, width: 'auto'}} src='https://11m5ki43y82budjol1gjvv5s-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/node-js-main.jpg' alt='businessimage'/>
			<img style={{height: 150, width: 'auto'}} src='https://appendto.com/wp-content/uploads/2016/05/css3-420x210.jpg' alt='businessimage'/>
		</TabPanel>

		<TabPanel className='center'>
			<h2>Currently, we are offering a 20% discount for new customers!</h2>
		</TabPanel>

		<TabPanel className='center'>
			<h2>jmdevs.io<br/>github.com/jmdevs</h2>
		</TabPanel>
		</div>
	</Tabs>

</div>
);
}

export default ProfileUserView;

