import React, { Component } from 'react';
import Item from "./item"

class Landing extends Component {
    state = {
        items:[],
        searchTerm:""
    }

itemMapper = () => this.state.items.map(item => <Item key={item.id} obj={item}/>)

    componentDidMount() {
        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(res => {
            this.setState({
                items:res
            })
        })
    }

    handleChange = (e) => {
        
        let {value} = e.target
        this.setState({
            searchTerm: value
        })
    }

    render() {
        let {searchTerm} = this.state
        return (
            <div>
                <input type="text" name="search" value={searchTerm} onChange={this.handleChange}/>
            <ul>
                {this.itemMapper()}
            </ul>
            </div>
        );
    }
}

export default Landing;