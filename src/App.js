import React, { Component }  from 'react';
import './App.css';
import {Switch, Route, withRouter} from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Landing from './components/Landing'
import Login from "./components/Login"
class App extends Component {
  state = {
    user: {},
    token:""
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token")

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          this.setState({
            user: data.user,
            token: data.token
          })
        }
      })


    }}
    handleLogin = (obj) => {
      this.setState({
        user:obj.user,
        token:obj.token
      },() => this.props.history.push("/landing"))
    }
  handleSubmit= (name,emailLogin,passwordIdentification,credits,rating,bio) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
                'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        emailLogin,
        passwordIdentification,
            credits,
            rating,
            bio                    
      })

    })
.then( r => r.json())
.then(resp => {
  if (!resp.error) {
    localStorage.setItem("token", resp.token)
    this.setState({
      user: resp.user,
      token: resp.token
    }, () => {
      this.props.history.push("/landing")
    })
}}
)}
  renderForm = () => <Form OnSubmit={this.handleSubmit}/>
  renderLanding = () => <Landing/>
  pushToLanding = () => {
    this.props.history.push("/landing")
    return <Landing/>
  }
  renderLogin = (routerProps) => {
    return <Login login={this.handleLogin}/>
  }
  render(){
    
    console.log(this.props.history.push)
    return (
      <div>
        <Navbar user ={this.state.user}/>
        <Switch>
          <Route path="/signup" component={this.renderForm} />
          <Route path="/login" component={this.renderLogin} />
          <Route path="/landing" exact  component={this.renderLanding} />
          <Route path='/' exact component={this.pushToLanding}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App);