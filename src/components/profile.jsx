import React, { Component } from 'react';
import User from "./user"
import AddItem from './AddItem'
import Transaction from "./Transaction"


class profile extends Component {
    render() {
        // console.log(this.props.obj)
        let {username, email,credits,bio } = this.props.obj
        return (
            <div>
                <User obj={this.props.obj}/>
                <AddItem />
                <Transaction />
            </div>
        );
    }
}

export default profile;