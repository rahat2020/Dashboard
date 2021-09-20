import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Dashboard from './Dashboard.js'
// import Home from './Home/Home';
export default function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route exact  path="/" 
                        render={()=>{
                         return  ( <Redirect to="/dashboard/manage-user"/>)

                        }}
                    >
                        
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
