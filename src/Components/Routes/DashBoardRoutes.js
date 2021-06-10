import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Footer } from '../Ui/Footer';
import { Navbar } from '../Ui/Navbar';
import { Inicio } from '../Secciones/Inicio';
import { Nosotros } from '../Secciones/Nosotros';
import { Talleres } from '../Secciones/Talleres';
import { Noticias } from '../Secciones/Noticias';
import ScrollToTop from 'react-scroll-up';
import { Anuncios } from '../Secciones/Anuncios';
import { Calendario } from '../Secciones/Calendario';
import { Galeria } from '../Secciones/Galeria';
import { Contacto } from '../Secciones/Contacto';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="containerEverthing">
                <Switch>
                    <Route path="/Inicio" exact component={Inicio} />
                    <Route path="/Nosotros" exact component={Nosotros} />
                    <Route path="/Talleres" exact component={Talleres} />
                    <Route path="/Noticias" exact component={Noticias} />
                    <Route path="/Anuncios" exact component={Anuncios} />
                    <Route path="/Calendario" exact component={Calendario} />
                    <Route path="/Galeria" exact component={Galeria} />
                    <Route path="/Contacto" exact component={Contacto} />
                    <Redirect to='/Inicio' />
                </Switch>
            </div>
            <Footer />
            <ScrollToTop showUnder={200}>
                <i className="fas fa-arrow-up go-up"></i>
            </ScrollToTop >
        </>
    )
}