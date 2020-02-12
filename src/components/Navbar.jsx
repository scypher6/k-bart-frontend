import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu, Segment } from 'semantic-ui-react'

export class Navbar extends Component {
    handleClick = () => {
    localStorage.clear()
    this.props.logout()
    }

    state = { 
             activeItem: 'home' ,
             searchTerm: ""
            }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    handleClick = () => {
                localStorage.clear()
                this.props.logout()
        }

    handleEntrance = () => {
        if(this.props.user.username){
            return( 
                <div>
            <NavLink to='/profile'>    {`Welcome ${this.props.user.username}!`}</NavLink> 
            <NavLink to='/landing' onClick={this.handleClick}>Logout</NavLink>
            </div>)
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

        handleChange = (e) => {
                
            let {value} = e.target
            this.setState({
                searchTerm: value
            }
            )
            this.props.handleSearch(this.state.searchTerm)
        }


    render() {
        const { activeItem } = this.state

        return (
            // <div>
            //     <NavLink to='/'><img src ="K-bart_Logo.png" width='100px' height='100px' alt = 'logo' /> <h1>K-Bart</h1> </NavLink> 
            //     {this.handleEntrance()}
            // </div>

            <div className='menuDiv nav'>
            <NavLink to='/'><img src ="K-bart_Logo.png" width='10%' height='10%' alt = 'logo' /></NavLink>
            <Menu pointing inverted>
            <NavLink to='/signup'>
            <Menu.Item
                    name='K-Bart'
                    active={activeItem === 'K-Bart'}
                    onClick={this.handleItemClick}
                   
            />
</NavLink> 
            <Menu.Item
                    name='Login'
                    active={activeItem === 'Login'}
                    onClick={this.handleItemClick}
                    to='/login'
            />
            <Menu.Item
                    name='Signup'
                    active={activeItem === 'Signup'}
                    onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
                    <Menu.Item>
                    <Input icon='search' placeholder='Search...' value={this.state.searchTerm} onChange={this.handleChange} />
                    </Menu.Item>
            </Menu.Menu>
            </Menu>
            </div>
        )
    }
}

export default Navbar
