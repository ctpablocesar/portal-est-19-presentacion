import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { Footer } from '../Ui/footer'
import { Navbar } from '../Ui/navbar'
import { Inicio } from '../Secciones/Inicio';
import { Nosotros } from '../Secciones/Nosotros';


export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="containerEverthing">
                <Switch>
                    <Route path="/Inicio" component={Inicio} />
                    <Route path="/Nosotros" component={Nosotros} />
                    <Redirect to='/Inicio' />
                </Switch>
            </div>
            <Footer />
        </>
    )
}