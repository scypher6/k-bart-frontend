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
        let credits, rating = 0;
        let bio = "";
        
        fetch('http://localhost:3000/users', {
              method: "POST",
              headers: {
                        'content-type': 'application/json'
              },
              body: {
                    username,
                    email,
                    password,
                    credits,
                    rating,
                    bio                    
              }

            }

        )
        .then( r => r.json())
        .then(console.log)
    }
  
    render() {

        let {username, password, email} = this.state

        return (
            <div>
                Please sign up:

                <form onSubmit={this.handleSubmit}>
                    <br />
                    <input type='text' name='username' value={username} onChange={this.handleChange}/>
                    <br />
                    <br />
                    <input type='text' name='email' value={email} onChange={this.handleChange}/>
                    <br />
                    <br />
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
