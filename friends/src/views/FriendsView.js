import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getFriends } from '../actions';



class FriendsView extends Component {

    componentDidMount() {
        this.props.getFriends();
    }

    render() {

        return (
            <Fragment>

                <Loader height='60' weight='60' />

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
)(FriendsView);

