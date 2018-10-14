import React from 'react';
import './EditCard.css';

class EditCard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
            imageFile: '',
            businessImage: this.props.businessImage,
            businessDescription: this.props.businessDescription,
		}
	}

getImage = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  
  reader.onloadend = () => {
    this.setState({imageFile: file, businessImage: reader.result})
  }
  reader.readAsDataURL(file)
}

onBusinessDescriptionChange = (event) => {
    this.setState({businessDescription: event.target.value})
}

handleSubmit = () => {
  this.props.businessImageChange(this.state.businessImage)
  this.props.businessDescriptionChange(this.state.businessDescription)
}

	render() {
	return (
		<div className='cardpreview'>
		<div>
		<div className='background-editcard'>
		<h3>Edit Card Here</h3>
    <h5>Business Profile picture / logo</h5>
    <input type='file' onChange={this.getImage}/>
    <img src={this.state.businessImage} style={{height: 100, width: 100}} alt='business' />
    <h5>Business Description: (Max characters: 100)</h5>
    <textarea 
    rows='4' 
    maxLength='100' 
    placeholder='Enter Business Description'
    onChange={this.onBusinessDescriptionChange}/>
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

    <div>
    <h2 className='containcolumn'>Preview your business card here....</h2>
    <div style={{maxWidth: 600}}>
    <div className='editcard pa3 shadow-3'>
    <h4>{this.props.businessName}</h4>
    <img 	
    id='business-profile' 
    src={this.state.businessImage}
    alt='Business Profile'
    />
    <div>
    <p id='business-description'>{this.state.businessDescription}</p>
    </div>
    <p>{this.props.area}</p>
    </div>
    </div>
    </div>
    </div>
	)
}
}

export default EditCard;