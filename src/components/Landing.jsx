import React, { Component } from 'react';
import Item from "./item"
import { Container, Divider } from 'semantic-ui-react';

class Landing extends Component {
    state = {
        items:[],
        searchTerm:""
    }

filterer = () => this.state.items.filter(item => item.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))


itemMapper = () => this.filterer().map(item =>  <Item key={item.id} obj={item}/>)

    componentDidMount() {
        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(res => {
            this.setState({
                items:res
            })
        })
    }
    componentDidUpdate(prevProps, prevState) {
        
    }
    


    handleChange = (e) => {
        
        let {value} = e.target
        this.setState({
            searchTerm: value
        }

        )
    }



    render() {
    
        let {searchTerm} = this.state
        return (
            <Container textAlign='center'>
           
                <input type="text" name="search" value={searchTerm} onChange={this.handleChange}/>
            
            <ol>
                {this.itemMapper()}
            </ol>
            
            </Container>
        );
    }
}

export default Landing;