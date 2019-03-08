import React, { Fragment } from 'react';



const Friend = props => {

    console.log('Friend props: ', props.friend);
    
    return (
        <Fragment>
            <li><h2>{props.friend.name}</h2><span>{props.friend.age} years old</span></li>

        </Fragment>
    )
}



export default Friend