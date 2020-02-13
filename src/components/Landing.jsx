import React, { Component } from 'react';
import Item from "./item";
import Button from './Button'
import { Container, Divider } from 'semantic-ui-react';

class Landing extends Component {
    state = {
        items:[],
        // searchTerm:""
    }



    componentDidMount() {
        fetch("http://localhost:3000/items")
        .then(r => r.json())
        .then(res => {
            this.setState({
                items:res
            })
        })
    }

    handleBuy = (obj) => {
        // console.log(item.id)
        let newArray = [...this.state.items]
        let updatedArray = newArray.filter(item => item.id !== obj.id)
        this.setState({
            items:updatedArray
        })
    }

    render() {
       
        let updatedArray = [...this.state.items]
let filterer = () => updatedArray.filter(item => item.name.toLowerCase().includes(this.props.searchTerm.toLowerCase()))
let itemMapper = () => filterer().map(item =>  {
        return (
        <div>
            <Item key={item.id} obj={item} />
            <Button item ={item} buy={this.handleBuy}/>    
        </div>  
        )     
     })

        let {searchTerm} = this.state
        return (
            <Container textAlign='left'>
                
            
            <ul>
                {itemMapper()}
            </ul>
            
            </Container>
        );
    }
}

export default Landing;