import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { FaLock, FaHome } from 'react-icons/fa';

import Login from './components/Login';
import LoggedIn from './components/LoggedIn';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <section className='App'>
            <nav className='navigation'>
              <ul>
                <li><Link to='/'><FaHome /> Home</Link></li>
              </ul>  
              <ul>
                <li><Link to='/logged-in'>Login <FaLock /></Link></li>
              </ul>
            </nav>


            <Route path='/login' component={Login} />
            <PrivateRoute exact path='/logged-in' component={LoggedIn} />





          </section>
        </Router>
      </Fragment>
    );
  }
}

export default App;
