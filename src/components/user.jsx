import React, { Component } from 'react';

class user extends Component {
    render() {
        // console.log(this.props.obj)
        let {username, email,credits,bio } = this.props.obj
        return (
            <div>
                <ul>
                    <li> <h3>{username}</h3></li>
                    <ul>
                    <li> {email}</li>
                    <li>{credits}</li>
                    <li>
                    <p>herein lies the bio:{bio}</p>
                    </li>
                    </ul>
                </ul>
            </div>
        );
    }
}

export default user;