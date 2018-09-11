import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './EditSite.css';


class EditSite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            password: '',
            businessName: '',
            type: '',
            imageFile: '',
            businessImage: '',
            businessDescription: '',
            area: [],
            value: '',
            suggestions: [],
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

getImage = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  
  reader.onloadend = () => {
    this.setState({imageFile: file, businessImage: reader.result})
  }
  reader.readAsDataURL(file)
}

onSubmitRegister = () => {
    this.props.getUser({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        businessName: this.state.businessName,
        type: this.state.type,
        businessImage: this.state.businessImage,
        businessDescription: this.state.businessDescription,
        area: this.state.area,
    });
}

render(){
	return (
		<div>
		<div className='div-form'>
		<div className='background'>
		<h3>Edit Site here</h3>
		<h5>Business Name:</h5>
        <input 
        type='text' 
        placeholder='Enter Business Name' 
        required
        onChange={this.onBusinessNameChange}
        />
        <h5>Business Profile picture / logo</h5>
        <input type='file' onChange={this.getImage}/>
        <img style={{height: 100, width: 100}} src={this.state.businessImage} alt='business'/>
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
        <h5>Profile Tabs (Add as many as you would like)</h5>
		
        </div>
        </div>

        <h2>Preview your business site here...</h2>
        
        <div>
	<div className='center'> 
		<h1>{this.state.businessName}</h1>
	</div>
	<div id='info'>
	<h3 className='underline'>Info</h3>
	<h5>{this.state.businessDescription}</h5>
	<img  
		src={this.state.businessImage}
		alt='Business Profile' 
		id='businessProfilePicture'
	/>
	</div>
	<Tabs>
	<div>
		<TabList className='tab'>
			<Tab><input type='text' /></Tab>
			<Tab><input type='text' /></Tab>
			<Tab><input type='text' /></Tab>
			<Tab><input type='text' /></Tab>
			<Tab><input type='text' /></Tab>
			<Tab><input type='text' /></Tab>
		</TabList>

		<TabPanel className='center'>
			<h2><input type='text' /></h2>
		</TabPanel>

		<TabPanel className='center'>
			<h2><input type='text'/></h2>
		</TabPanel>

		<TabPanel className='center'>
			<h2><input type='text' /></h2>
		</TabPanel>

		<TabPanel className='center' id='gallery'>
			<input type='file' />
		</TabPanel>

		<TabPanel className='center'>
			<h2><input type='text' /></h2>
		</TabPanel>

		<TabPanel className='center'>
			<h2><input type='text' /></h2>
		</TabPanel>
		</div>
	</Tabs>

</div>
</div>
	)
}
}

export default EditSite;