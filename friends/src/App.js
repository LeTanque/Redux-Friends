import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import {FaLock} from 'react-icons/fa';

import Login from './components/Login';
import Protected from './components/Protected';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>


          <nav className='navigation'>
            <ul>
              <li><Link to='login'>Login <FaLock /></Link></li>
            </ul>
  
  
  
            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/protected' component={Protected} />
          </nav>

          
          

        </Router>
      </Fragment>
    );
  }
}

export default App;
