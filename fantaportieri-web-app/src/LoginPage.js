import { Component } from "react";

class LoginPage extends Component{
    constructor(props){
        super(props);
        this.state={
          username:'',
          password:'',
          loginscreen:[],
          loginmessage:'Bentornato su Fantaportieri! Fai il login per giocare!',
          registerLabel:'È la prima volta che sei qua? Registrati!',
          isLogin:true
        }
    }
    render() {
        return (
          <div className="LoginPage">
            {this.state.loginscreen}
            <div>
              {this.state.loginmessage}
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <label>Password</label>
                    <input
                        id="new-todo"
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>Login</button>
                </form>
                <div>
                    <button>
                        {this.state.registerLabel}
                    </button>
               </div>
            </div>
          </div>
        );
    }
}

export default LoginPage;