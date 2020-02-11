import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'

export class Navbar extends Component {

    handleEntrance = () => {
        if(this.props.user.username){
            return <NavLink to='/profile'>    {`Welcome ${this.props.user.username}!`}</NavLink> 
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
                <NavLink to='/'>Home</NavLink> 
                {this.handleEntrance()}
            </div>
        )
    }
}

export default Navbar
