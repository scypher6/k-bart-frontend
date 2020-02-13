import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
class button extends Component {
    handleClick = () => {
        fetch("http://localhost:3000/items/buy",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                item_id:this.props.item.id,
                buyer_id:localStorage.user
            })
        })
        .then(r => r.json())
        .then(res => {
            this.props.buy(res)
        })
    }
    render() {
        return (
            <div onClick={this.handleClick}>
                <button >Buy</button>
            </div>
        );
    }
}
export default button;