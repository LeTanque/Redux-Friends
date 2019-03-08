import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';



class Login extends Component {
    state = {
        credentials: {
            username:'',
            password:''
        }
    }
    

    handleChanges = event => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value
            }
        });
    };


    login = event => {
        event.preventDefault();
        this.props.login(this.state.credentials).then(() => {
            this.props.history.push('/logged-in')
        })
    }

    
    render() {
        return (
            <Fragment>
                <section className="login-form">

                
                    <form onSubmit={this.login} >
                        <input 
                            type="text"
                            name='username'
                            placeholder='Username...'
                            value={this.state.credentials.username}
                            onChange={this.handleChanges}
                        />
                        <input 
                            type="password"
                            name="password"
                            placeholder='Password...'
                            value={this.state.credentials.password}
                            onChange={this.handleChanges}
                        />
                        <button className='btn-dark'>Log in</button>
                    </form>


                </section>
            </Fragment>
        )
    }
}

export default connect(
    null,
    { login }
)(Login);