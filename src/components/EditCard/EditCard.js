import React from 'react';
import './EditCard.css';
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

class EditCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
            suggestions: [],
            area: [],
            businessName: '',
            businessDescription: '',
		}
	}

onAddArea = () => {
        this.state.area.push(this.state.value)
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

 onBusinessNameChange = (event) => {
    this.setState({businessName: event.target.value})
}

onTypeChange = (event) => {
    this.setState({type: event.target.value})
}

onBusinessDescriptionChange = (event) => {
    this.setState({businessDescription: event.target.value})
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
		<h3>Edit Card Here</h3>
		<h5>Business Name:</h5>
        <input 
        type='text' 
        placeholder='Enter Business Name' 
        required
        onChange={this.onBusinessNameChange}
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
        >
        Save
        </button>
        </div>
        </div>
        </div>

        <h2>Preview your business card here....</h2>
		<div id='profile-div'>
		<article className= 'pa3 shadow-3'>
		<h4>{this.state.businessName}</h4>
		<img 	
		id='business-profile' 
		src='https://cdn.uconnectlabs.com/wp-content/uploads/sites/5/2017/12/20170301155447.jpg' 
		alt='#'
		/>
		<p>{this.state.businessDescription}</p>
		<p>{this.state.area}</p>
		</article>
  		</div>
  		</div>
	)
}
}

export default EditCard;