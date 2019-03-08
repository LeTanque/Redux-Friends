import React, { Fragment } from 'react';
import Friend from './Friend';



const Friends = props => {
    console.log('These are the props on friends:', props.friends)
    return (
        <Fragment>

            <ul>
                {props.friends.map(friend => {
                    return (
                        <Fragment key={friend.id} >
                            <Friend friend={friend} /> 
                        </Fragment>
                    )
                } )}
            </ul>

        </Fragment>
    )
}

export default Friends