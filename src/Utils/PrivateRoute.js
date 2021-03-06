import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {getToken} from './Common';

// handle the private routes
function PrivateRoute({component: Component, ...rest}) {
    console.log("The private route is called");
    return (
        <Route
            {...rest}
            render={(props) => getToken() ? <Component {...props} /> :
                <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
        />
    )
}

export default PrivateRoute;