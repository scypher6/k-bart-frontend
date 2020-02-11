import React, { Component } from 'react';
import Item from './item';

class transaction extends Component {

    state = {
        items: []
    }    

    componentDidMount() {
        fetch(`http://localhost:3000/items/personal/${localStorage.user}`)
        .then(r => r.json())
        .then(res => {
            console.log(res)
        
            this.setState({
                items: res
            })
        })
    }

    personalItems = () => this.state.items.map(item => <Item obj= {item}  />)
    
    render() {
        return (
            <div>
                {this.personalItems()}
            </div>
        );
    }
}

export default transaction;