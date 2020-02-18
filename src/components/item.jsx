import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';
class item extends Component {
    render() {
        // console.log(this.props.obj)
        let {name , price, description,image} = this.props.obj
        return (
            <Grid className='grid'>
            <Grid.Column width={2} >
                    <img src={image} alt={name} class='gridImg'/>
             </Grid.Column>
             <Grid.Column width={11}>
             <ul>
                 <li type='none'>                 
                    <h1>{name}</h1>
                   <ul>
                        <li type="disc">${price}</li>
                        <li type="square">{description}</li>
                    </ul>
                 </li>
                </ul>
            </Grid.Column>
            </Grid>
        );
    }
}

export default item;