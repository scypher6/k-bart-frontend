import React, { Component } from 'react';

class item extends Component {
    render() {
        // console.log(this.props.obj)
        let {name , price, description} = this.props.obj
        return (
            <li>
                <h1>{name}</h1>
               <ul>
                    <li type="disc">${price}</li>
                    <li type="square">{description}</li>
                </ul>
            </li>
        );
    }
}

export default item;