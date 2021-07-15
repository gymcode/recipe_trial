import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import routes from '../routes'

// importing components 
import HomeComponent from '../Pages/home'

function MainService() {
    return (
        <BrowserRouter>
            {/* <Route exact component={HomeComponent} path={'/'}/> */}
            {routes.map((data)=>{
                return (
                    <Route exact={data.exact} path={data.path} component={data.component}/>
                )
            })}
        </BrowserRouter> 
    )
}

export default MainService