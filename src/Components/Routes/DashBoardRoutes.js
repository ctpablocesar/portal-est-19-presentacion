import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Footer } from '../Ui/footer'
import { Navbar } from '../Ui/navbar'
import { Inicio } from '../Secciones/Inicio';


export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="containerEverthing">
                <Switch>
                    <Route path="/Inicio" component={Inicio} />
                    <Redirect to='/Inicio' />
                </Switch>
            </div>
            <Footer />
        </>
    )
}