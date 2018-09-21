import React from 'react';
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

class EditAccount extends React.Component {
	constructor(props) {
		super(props);
			this.state = {
        businessName: '',
				type: '',
				      value: '',
            	suggestions: [],
            	area: []	
			}
		}


handlebusinessName = (event) => {
  this.setState({businessName: event.target.value})
}

onTypeChange = (event) => {
    this.setState({type: event.target.value})
}

onAddArea = () => {
    this.state.area.push(this.state.value)
    return (<li>{this.state.value}</li>);
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

  handleSubmit = () => {
    this.props.businessNameChange(this.state.businessName)
    this.props.areaChange(this.state.area)
  }

	render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Select Business Area(s)',
      value,
      onChange: this.onChange
    };
	return (
		<div>
		<div className='div-form'>
		<div className='background'>
		<h3>Edit Account Information Here</h3>
        <h5>Business Name:</h5>
      <input
      type='text'
      placeholder='Enter business name'
      onChange={this.handlebusinessName}
      />
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
        <ul>{this.state.area}</ul>
        <div className='div-button'>
        <button 
        className='dim pointer' 
        id='register-button'
        onClick={this.handleSubmit}
        >
        Save
        </button>
        </div>
		</div>
        </div>
        </div>
	)
}
}

export default EditAccount;