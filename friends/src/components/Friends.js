import React, { Fragment } from 'react';

const Friends = (props) => {

    return (
        <Fragment>
            
            <ul>
                {props.friends.map(friend => console.log(friend))}
            </ul>

        </Fragment>
    )
}

export default Friends