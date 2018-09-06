import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './Register.css';
import Autosuggest from 'react-autosuggest';
import {areas} from '../Areas/Areas';

  const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;
 
  return inputLength === 0 ? [] : areas.filter(area =>
    area.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;
 
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            businessName: '',
            type: '',
            businessDescription: '',
            area: [],
            value: '',
            suggestions: []
        }
    }

onNameChange = (event) => {
    this.setState({name: event.target.value})
  }

onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }

onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }

onBusinessNameChange = (event) => {
    this.setState({businessName: event.target.value})
}

onTypeChange = (event) => {
    this.setState({type: event.target.value})
}

onBusinessDescriptionChange = (event) => {
    this.setState({businessDescription: event.target.value})
}


onAddArea = () => {
        this.state.area.push(this.state.value)
    }

onSubmitRegister = () => {
    this.props.getUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        businessName: this.state.businessName,
        type: this.state.type,
        businessDescription: this.state.businessDescription,
        area: this.state.area,
    });
}
    
onChange = (event, { newValue }) => {
    this.setState({
      value: newValue,

    });
  };

onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
    
render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Select Business Area(s)',
      value,
      onChange: this.onChange
    };
 return (
 <Tabs>
    <TabList className='tab'>
      <Tab>Register Business</Tab>
      <Tab>Register User</Tab>
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
        <h5>Email:</h5>
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
        <h5>Business Name:</h5>
        <input 
        type='text' 
        placeholder='Enter Business Name' 
        required
        onChange={this.onBusinessNameChange}
        />
        <h5>Business Profile picture / logo</h5>
        <input type='file'/>
        <h5>Business Type:</h5>
    	<select value={this.state.type} onChange={this.onTypeChange} required>
    	<option value='Animal Care'>Animal Care</option>
    	<option value='Arts & Entertainment'>Arts & Entertainment</option>
    	<option value='Baby and Kids'>Baby and Kids</option>
    	<option value='Construction'>Construction</option>
    	<option value='Computers & Electronics'>Computers & Electronics</option>
    	<option value='Fashion'>Fashion</option>
    	<option value='Finance & Legal Services'>Finance & Legal Services</option>
    	<option value='Food'>Food</option>
    	<option value='Hair & Beauty'>Hair & Beauty</option>
    	<option value='Sports & Fitness'>Sports & Fitness</option>
    	<option value='Other Services'>Other Services</option>
    	</select>
        <h5>Business Description: (Max characters: 100)</h5>
        <textarea 
        rows='4' 
        maxLength='100' 
        placeholder='Enter Business Description'
        onChange={this.onBusinessDescriptionChange}/>
        <h5>Business Location / Areas covered:</h5>
        <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        />
        <button onClick={this.onAddArea}>Add</button>
        <ul><li>{this.state.area}</li></ul>
        <div className='div-button'>
        <button 
        className='dim pointer' 
        id='register-button'
        onClick={this.onSubmitRegister}>Register</button>
        </div>
    	</div>
    </TabPanel>
    
    <TabPanel className='div-form'>
        <div className='background'>
        <h3>Enter user information below</h3>
    	<h5>Name:</h5>
    	<input 
        type='text' 
        placeholder='Enter name'
        onChange={this.onNameChange}
        />
    	<h5>Email:</h5>
    	<input 
        type='text' 
        placeholder='Enter email address'
        onChange={this.onEmailChange}
        />
        <h5>Password:</h5>
        <input 
        type='password' 
        placeholder='Enter Password'
        onChange={this.onPasswordChange}/>
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