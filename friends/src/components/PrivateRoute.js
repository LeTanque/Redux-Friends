import React, { Fragment } from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({ component: LoggedIn, ...rest }) => {
    console.log(rest)

    return (
        <Fragment>

            <Route  
                {...rest}
                render={props =>
                    localStorage.getItem("token") ? (
                        <LoggedIn {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                }
            />
            
        </Fragment>
    )
}

export default PrivateRoute