import React, { Component} from 'react'
import { NavLink } from 'react-router-dom'
import { Input, Menu, Segment } from 'semantic-ui-react'

export class Navbar extends Component {

    state = { 
             activeItem: 'home' ,
             searchTerm: ""
            }

    handleItemClick = (e, { name }) => {
        // console.log(name)
        // console.log(this.props)
        let route = `/${name.toLowerCase()}`
         this.setState({ activeItem: name }, () => this.props.history.push(route))
    }

    handleClick = () => {
                localStorage.clear()
                this.props.logout()
        }

    handleEntrance = () => {
        if(this.props.user.username){
            return <NavLink to='/profile'>    {`Welcome ${this.props.user.username}!`}</NavLink> 
            // <NavLink to='/landing' onClick={this.handleClick}>Logout</NavLink>
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

            <Menu.Item
                    name='landing'
                    active={activeItem === '/landing'}
                    onClick={this.handleItemClick}
                   
            />

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
