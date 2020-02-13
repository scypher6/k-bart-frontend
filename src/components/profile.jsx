import React, { Component } from 'react';
import User from "./user"
import AddItem from './AddItem'
import Transaction from "./Transaction"
import {Container} from 'semantic-ui-react'

class profile extends Component {
    render() {
        // console.log(this.props.obj)
     
        return (
            <div>
                <User obj={this.props.obj}/>
                <h2 style={{"margin-left": "30%"}}> Add an Item</h2>
                <AddItem />
                <Container  textAlign='left'>
                <Transaction />
                </Container>
            </div>
        );
    }
}

export default profile;