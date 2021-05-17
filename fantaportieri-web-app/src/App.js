import logo from './logo.svg';
import './App.css';
import './LoginPage.js';
import { Component } from 'react';
import LoginPage from './LoginPage.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
  componentWillMount(){
    var loginPage =[];
    loginPage.push(<LoginPage parentContext={this}/>);
    this.setState({loginPage:loginPage})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {this.state.loginPage}
          {this.state.uploadScreen}
        </header>
      </div>
    );
  }
}

export default App;
