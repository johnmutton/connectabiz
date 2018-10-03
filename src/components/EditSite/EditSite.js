import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
            About: true,
            "Opening Hours": true,
            Contact: true,
            Menu: false,
            Offers: false,
            "External Links": true,
            tabOptions: {
                About: {desc:'1'},
                "Opening Hours": {desc: '2'},
                Contact: {desc:'3'},
                Menu: {desc:'4'},
                Offers: {desc:'5'},
                "External Links": {desc:'6'},
            }
            }

            this.handleCheckClicked = this.handleCheckClicked.bind(this);
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


getImage = (event) => {
  let file = event.target.files[0];
  let reader = new FileReader();
  
  reader.onloadend = () => {
    this.setState({imageFile: file, businessImage: reader.result})
  }
  reader.readAsDataURL(file)
}

handleCheckClicked(e) {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

handleDesc = (event) => {
    let tabOptions = {...this.state.tabOptions[event.target.name]};
    let tabOptionsDesc = tabOptions.desc;
    
    this.setState({[event.target.name.desc]: event.target.value});
    console.log([event.target.name.desc]); 
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

render() {
    const links = [];
    const tabs = [];
    const tabPanels = [];

    Object.keys(this.state.tabOptions).forEach(name => {
      links.push(
          <div>
          <label key={name}>{name}</label>
          <input
            type="checkbox"
            checked={this.state[name]}
            name={name}
            onChange={this.handleCheckClicked}
          />
          { this.state[name] === true ? (
          <input
          name={name}
          type='text'
          onChange={this.handleDesc}
          />
          ) : null }
          </div>
      );

      if (!this.state[name]) return;

      const { desc } = this.state.tabOptions[name];



      /*this.handleDesc = (event) => {
        if ({name} === 'About')
        this.setState(tabOptions[About]: event.target.value)
      }*/

      tabs.push(
        <Tab>
          <h3>{name}</h3>
        </Tab>
      );

      tabPanels.push(
        <TabPanel> 
            {desc}
        </TabPanel>
      );
    });

	return (
		<div className='site-preview'>
        <div>
        <div className='background-editsite'>
        <h3>Edit Site here</h3>
        <h5>Business Profile picture / logo</h5>
        <input type='file' onChange={this.getImage}/>
        <img style={{height: 100, width: 100}} src={this.state.businessImage} alt='business'/>
        <h5>Profile Tabs (Add as many as you would like)</h5>
        {links}
		</div>
        </div>

        <div>
        <h2 className='containcolumn'>Preview your business site here...</h2>
        <div className='site'>
        <div className='center'> 
        <h1>{this.state.businessName}</h1>
        </div>
        <div id='info'>
        <img  
        src={this.state.businessImage}
        alt='Business Profile' 
        id='businessProfilePicture'
        />
        </div>
        <Tabs>
        <div>
        <TabList>{tabs}</TabList>
        {tabPanels}
        </div>
        </Tabs>
        </div>
        </div>
        </div>
	)
}
}

export default EditSite;