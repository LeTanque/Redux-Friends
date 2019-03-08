import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { FaUnlock } from 'react-icons/fa';
import Loader from 'react-loader-spinner';


import { getFriends } from '../actions';
import Friends from './Friends';



class LoggedIn extends Component {

    logout = () => {
        localStorage.clear();
        this.props.history.push('/login');
    }
    
    componentDidMount() {
        this.props.getFriends();
    }

    render () {
        console.log('These are the props on LoggedIn: ', this.props);
        if (this.props.fetching) {
            return (
                <section className='logged-in-page-loading'>
                    <Loader type='Ball-Triangle' color='#0077cc' height='40%' weight='40%' />
                </section>

            )
        } else if (this.props.error) {
            return (
                <section className='logged-in-page-error'>
                    <Loader type='Ball-Triangle' color='#ff0000' height='40%' weight='40%' />
                    <code>{this.props.error}</code>
                </section>
            )
        }
        
        return (
            <Fragment>
                <section className='logged-in-page'>

                    
                    <div className='profile-header'>Profile
                        <button 
                            className='logged-in-logout btn-dark'
                            onClick={this.logout}
                        >Logout <FaUnlock /></button>
                    </div>

                    <hr></hr>
                    
                    <Friends friends={this.props.friends} />

                </section>
            </Fragment>
        )
    }
}




const mapStateToProps = state => ({
    friends: state.charsReducer.friends,
    fetching: state.charsReducer.fetching,
    error: state.charsReducer.error
})

export default connect(
    mapStateToProps,
    { getFriends }
)(LoggedIn)
