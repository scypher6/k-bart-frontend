import React, { Component } from 'react'

export class Form extends Component {

    state = {
        username: "",
        password: "",
        email: ""
    }

    handleChange = (e) => {
        // console.log(e)
        let {name, value} = e.target
        
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        // console.log(e)
        e.preventDefault();
        const {username, email, password} = e.target
        let name = username.value
        let emailLogin = email.value
        let passwordIdentification = password.value
        let credits= 0, rating = 0;
        let bio = "";
        this.props.OnSubmit(name,emailLogin,passwordIdentification,credits,rating,bio)
    }
  
    render() {

        let {username, password, email} = this.state

        return (
            <div>
                Please sign up:

                <form onSubmit={this.handleSubmit}>
                    <br />
                    
                    <br />
                    <label>Username:</label> 
                    <input type='text' name='username' value={username} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <label>email:</label>
                    <input type='text' name='email' value={email} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <label>password:</label>
                    <input type='text' name='password' value={password} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <input type='submit' name='submit' value='submit' />
                </form>
            </div>
        )
    }
}

export default Form
