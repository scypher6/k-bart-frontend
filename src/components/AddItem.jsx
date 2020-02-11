import React, { Component } from 'react';

class AddItem extends Component {

    state = {
        name: "",
        price: 0,
        description: "",
        category: "",
        seller_id: 0,
    }

    handleSubmit = (e) => {
        e.preventDefault()

        let {name, price, description} = e.target

        fetch('http://localhost:3000/items/', {
            method: "POST",
            headers: {
                    'content-type': 'application/json'
            },
            body: JSON.stringify({
                 name: name.value,
                 price: price.value,
                 description: description.value,
                 category: 1,
                 seller: localStorage.user
            })
        })
        .then (r => r.json())
        .then( data => {
                // this.props.sendItemsToLanding(data)
        })
    }

    render() {

        

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    Item name: 
                    <input type="text" name="name" />
                    <br />
                    Description
                    <input type="text" name="description" />
                    <br />
                    Price: 
                    <input type="text" name="price" />
                    <br />
                    <input type="submit" name="submit" />
                </form>
                <br />
            </div>
        );
    }
}

export default AddItem;