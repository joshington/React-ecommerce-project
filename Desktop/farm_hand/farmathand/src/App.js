import React, {Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import species from   './rhinospecies';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from  './components/Navbar';
import Dashboard from './components/Dashboard';
import Sidebar from  './components/Sidebar';
import Quiz from  './components/Quiz';
import FAQ from  './components/FAQ';
import Contact from  './components/Contact';
import Gallery from './components/Gallery';
import Donate from  './components/Donate';

export default class App extends Component {


state= {
  species:species,
  habitat:''
}
handleChange = (e) => {
    this.setState({
      habitat:e.target.value
    },()=> {

    })
  }
  render(){
    return (
      <React.Fragment>
        <Navbar />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/dashboard" component={Gallery} />
          <Route path="/faq"  component={Donate} />
          <Route path="/contact" component={FAQ} />
          <Route path="/quiz"  component={Quiz} />
        </Switch>
        <div>
          handleChange={this.handleChange}
          value={this.state.habitat}
          
        </div>

    }
      </React.Fragment>
    );
  }

}
