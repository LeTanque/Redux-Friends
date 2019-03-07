import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';



class Login extends Component {
    state = {}
    
    login = event => {
        event.preventDefault();
    }

    render() {
        return (
            <Fragment>

                <form onSubmit={this.login} >
                    <input 
                        type="text"
                    />
                    <input 
                        type="password"
                    />
                </form>

            </Fragment>
        )
    }
}

export default connect(
    null,
    { login }
)(Login);