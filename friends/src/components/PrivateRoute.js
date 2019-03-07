import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, ...rest }) => {


    return (
        <Fragment>
            <Route  
                {...rest}
                render={props =>
                    localStorage.getItem("token") ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
        </Fragment>
    )
}

export default PrivateRoute