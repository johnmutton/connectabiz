import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import SearchInputs from './components/SearchInputs/SearchInputs';
import Title from './components/Title/Title';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';


const initialState = { 
	route: 'home',
  isSignedIn: false,
  user: {name: '',
  email: '',
  password: '',
  businessName: '',
  businessImage: '',
  category: '',
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
      this.setState({isSignedIn: true, route: 'signedin'})
    }
  }

  getUser = (data) => {
    this.setState({user:{
      name: data.name,
      email: data.email,
      password: data.password,
      businessName: data.businessName,
    }
    })
      console.log({name: data.name,
      email: data.email,
      password: data.password,
      businessName: data.businessName,
  });
}

  renderSwitch = () => {
  switch(this.state.route) {
    case 'home':
     return (
      <div>
        <Title />
        <SearchInputs category={this.state.user.category} onRouteChange={this.onRouteChange} />
      </div>);
    case 'register':
      return (<Register getUser={this.getUser} onRouteChange={this.onRouteChange}/>);
    case 'signin':
      return (<Signin isSignedIn={this.isSignedIn} onRouteChange={this.onRouteChange}/>);
    default:
      console.log('do nothing');
  }
}

  render() {
    return (
      <div>
      <Navbar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} route={this.state.route}/>
      {this.renderSwitch(this.state.route)}
      </div>
	 );
   }
 }

export default App;