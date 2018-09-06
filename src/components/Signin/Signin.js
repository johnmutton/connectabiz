import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Signin.css';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    this.props.isSignedIn(true)
  }

  render() {
	return (
<Tabs>
    <TabList className='tab'>
      <Tab>Sign In</Tab>
    </TabList>

    <TabPanel className='div-form'>
		<div className='background'>
				<h3> Enter your details below to sign in </h3>
				<h5>Email:</h5>
    			<input 
                type='text' 
                placeholder='Enter email address'
                onChange={this.onEmailChange}/>
    			<h5>Password:</h5>
    			<input 
                type='password' 
                placeholder='Enter Password'
                onChange={this.onPasswordChange}/>
        		<div className='div-button'>
        			<button 
                    className='dim pointer' 
                    id='signin-button'
                    onClick={this.onSubmitSignIn}
                    >Sign in
                    </button>
        		</div>
    	</div>
    </TabPanel>

</Tabs>
	)
}
}

export default Signin;