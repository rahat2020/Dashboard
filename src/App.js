import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Dashboard from './Dashboard.js'
export default function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    {/* <Route exact path="/">
                     <Home/>
                    </Route> */}
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
