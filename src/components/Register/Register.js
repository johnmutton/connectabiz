import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Register.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            businessName: '',
            email: '',
            password: '',
        }
    }

onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

onBusinessNameChange = (event) => {
    this.setState({businessName: event.target.value})
}

onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

onSubmitRegister = () => {
    this.props.getUser({
        name: this.state.name,
        businessName: this.state.businessName,
        email: this.state.email,
        password: this.state.password,
    });
    this.props.onRouteChange('signedin');
}
    
render() {
 return (
 <Tabs>
    <TabList className='tab'>
      <Tab>Register Business</Tab>
    </TabList>

    <TabPanel className='div-form'>
    	<div className='background'>
        <h3>Enter Business information below</h3>
        <h5>Name:</h5>
        <input 
        type='text' 
        placeholder='Enter name'
        onChange={this.onNameChange}
        />
        <h5>Business Name:</h5>
        <input
        type='text'
        placeholder='Enter business name'
        onChange={this.onBusinessNameChange}
        />
        <h5>Business Email:</h5>
        <input 
        type='text' 
        placeholder='Enter email address'
        onChange={this.onEmailChange}
        />
        <h5>Password:</h5>
        <input 
        type='password' 
        placeholder='Enter Password'
        onChange={this.onPasswordChange}
        />
        <div className='div-button'>
        <button 
        className='dim pointer' 
        id='register-button'
        onClick={this.onSubmitRegister}>Register</button>
        </div>
        </div>
  	</TabPanel>
  </Tabs>
);
}
}

export default Register;