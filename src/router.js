import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import React from 'react';
import App from './App'
import Login from './views/login/Login'
import Regsiter from './views/register/Regsiter'
import Detail from './views/detail'
import NoMatch from './views/404'

export default function IRouter(){
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/reg" exact component={Regsiter}>
                    <Redirect to="/login"></Redirect>
                </Route>
                <Route path="/del/:id" exact component={Detail}></Route>
                <Route path="*" exact component={NoMatch}></Route>
            </Switch>
        </Router>
    )
}