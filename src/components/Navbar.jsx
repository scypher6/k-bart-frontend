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

    

        handleChange = (e) => {
                
            let {value} = e.target
            this.setState({
                searchTerm: value
            },() => this.props.handleSearch(value) )
            
        }

        handleLinkRendering = (activeItem) => {
            if(localStorage.user){

                return(
            <div className='menuDiv nav'>
                <NavLink to='/'><img src ="K-bart_Logo.png" width='10%' height='10%' alt = 'logo' /></NavLink>
                <Menu pointing inverted>
                <NavLink to='/'>
                <Menu.Item
                        name='Home'
                />
                </NavLink> 
                <NavLink to="/profile">
                <Menu.Item
                        name={`Welcome ${this.props.user.username}!!`}
                />
                </NavLink>
                <NavLink to="/" onClick={this.handleClick}>
                <Menu.Item
                        name="Logout"
                />
                </NavLink>
                <Menu.Menu position='right'>
                    <Menu.Item>
                    <Input icon='search' placeholder='Search...' value={this.state.searchTerm} onChange={this.handleChange} />
                    </Menu.Item>
                </Menu.Menu>
                </Menu>
                </div>
                )
            }else {
                return(
                    <div className='menuDiv nav'>
                                 <NavLink to='/'><img src ="K-bart_Logo.png" width='10%' height='10%' alt = 'logo' /></NavLink>
                                 <Menu pointing inverted>
                                <NavLink to='/'>
                                <Menu.Item
                                        name='landing' 
                                />
                                </NavLink> 
                                <NavLink to='/login'>
                                <Menu.Item
                                        name='Login'
                                />
                                </NavLink>
                                <NavLink to='/signup'>
                                <Menu.Item
                                        name='Signup'
                                />
                                </NavLink>
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










    render() {
        const { activeItem } = this.state

        return (
            <div>
            {this.handleLinkRendering(activeItem)}
            </div>
        )
    }
}

export default Navbar
  // <div>
            //     <NavLink to='/'><img src ="K-bart_Logo.png" width='100px' height='100px' alt = 'logo' /> <h1>K-Bart</h1> </NavLink> 
            //     {this.handleEntrance()}
            // </div>






//             <div className='menuDiv nav'>
//             <NavLink to='/'><img src ="K-bart_Logo.png" width='10%' height='10%' alt = 'logo' /></NavLink>
//             <Menu pointing inverted>
//             <NavLink to='/signup'>
//             <Menu.Item
//                     name='landing'
//                     '/landing'}
//                     
                   
//             />
// </NavLink> 
//             <Menu.Item
//                     name='Login'
//                     'Login'}
//                     onClick={this.handleItemClick}
//                     to='/login'
//             />
//             <Menu.Item
//                     name='Signup'
//                     'Signup'}
//                     onClick={this.handleItemClick}
//             />
//             <Menu.Menu position='right'>
//                     <Menu.Item>
//                     <Input icon='search' placeholder='Search...' value={this.state.searchTerm} onChange={this.handleChange} />
//                     </Menu.Item>
//             </Menu.Menu>
//             </Menu>
//             </div>