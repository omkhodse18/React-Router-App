import React from 'react'
import {Navigate} from "react-router-dom"

function PrivateRoute({isLoggedIn, children}) {

    if(isLoggedIn){
        // children is dashboard  
        return children;
    }
    else{
        return <Navigate to="/login"/>
    }
}

export default PrivateRoute
