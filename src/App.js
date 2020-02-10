import React, { Component }  from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';


class App extends Component {



  renderForm = () => {


  }


  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/login" component={Form} />
        </Switch>
      </div>
    )
  }
}

export {App};