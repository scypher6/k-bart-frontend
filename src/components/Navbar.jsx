import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {
    handleClick = () => {
    localStorage.clear()
    this.props.logout()
    }

    handleEntrance = () => {
        if(this.props.user.username){
            return (
                <div>
            <NavLink to='/profile'> {`Welcome ${this.props.user.username}!`}</NavLink> 
            <NavLink to='/landing' onClick={this.handleClick}>Logout</NavLink>
            </div>
            )
        }
        else{
            return(
            <div>  
            <NavLink to='/login'>Login</NavLink> ||  
            <NavLink to='/signup'>SignUp</NavLink> 
            </div>
            )
        }

}
    render() {
        return (
            <div>
                <NavLink to='/'><img src ="" alt = 'logo' /> <h1>K-Bart</h1> </NavLink> 
                {this.handleEntrance()}
            </div>
        )
    }
}

export default Navbar
