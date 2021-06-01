import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { DashBoardRoutes } from './DashBoardRoutes';



export const AppRouter = () => {
    return (
        <Router>
            <main>
                <Switch>
                    <Route path="/" component={DashBoardRoutes} />
                   
                </Switch>
            </main>
        </Router>
    )
}