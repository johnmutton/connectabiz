import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchInputs from './components/SearchInputs/SearchInputs';
import Title from './components/Title/Title';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import ProfileUserView from './components/Profile/ProfileUserView';
import ProfileCard from './components/ProfileCard/ProfileCard';
import UserSidebar from './components/UserSidebar/UserSidebar';


const initialState = { 
	route: 'home',
  isSignedIn: false,
  user: {name: '',
  email: '',
  password: '',
  businessName: '',
  type: '',
  businessDescription: '',
  area: []
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
    }

	onRouteChange = (route) => {
		if (route === 'register') {
			this.setState({route: 'register'})
		}
		else if (route === 'signin') {
			this.setState({route: 'signin', isSignedIn: false})
		}
		else if (route === 'home') {
			this.setState({route: 'home'})
		}
    else if (route === 'signedin') {
      this.setState({route: 'signedin', isSignedIn: true})
    }
    else if (route === 'profile') {
      this.setState({route: 'profile'})
      }
    }

  isSignedIn = (bool) => {
    if (bool === true) {
      this.setState({isSignedIn: true, route: initialState})
    }
  }

  getUser = (data) => {
    this.setState({user:{
      name: data.name,
      email: data.email,
      password: data.password,
      businessName: data.businessName,
      type: data.type,
      businessDescription: data.businessDescription,
      area: data.area
    }
    })
      console.log({name: data.name,
      email: data.email,
      password: data.password,
      businessName: data.businessName,
      type: data.type,
      businessDescription: data.businessDescription,
      area: data.area
  });
}

  render() {
    return (
    <div>
      <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
     { this.state.route === 'home'
    	? 
    	<div>
    	<Title />
      <SearchInputs />
      <ProfileCard  
        businessName={this.state.user.businessName} 
        businessDescription={this.state.user.businessDescription}
        area={this.state.user.area}
        onRouteChange={this.onRouteChange}
      />
      </div>
      	: (this.state.route === 'register'
      	? <Register getUser={this.getUser}/>
      	: <Signin isSignedIn={this.isSignedIn} onRouteChange={this.onRouteChange}/>
      	)
    	}
    </div>
	 );
   }
 }

export default App;