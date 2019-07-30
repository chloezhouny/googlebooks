import React from 'react';
import Search from './pages/Search'
import Saved from './pages/Saved'
// import NoMatch from './pages/NoMatch'
import Nav from './components/Nav'

import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'



function App() {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Route exact path='/' component={Search} /> 
          <Route exact path='/saved' component={Saved} /> 

        </Switch>    
      

      </div>

    </Router>
  );
}



export default App;
