import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Footer } from '../Ui/footer';
import { Navbar } from '../Ui/navbar';
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
                    <Route path="/Inicio" component={Inicio} />
                    <Route path="/Nosotros" component={Nosotros} />
                    <Route path="/Talleres" component={Talleres} />
                    <Route path="/Noticias" component={Noticias} />
                    <Route path="/Anuncios" component={Anuncios} />
                    <Route path="/Calendario" component={Calendario} />
                    <Route path="/Galeria" component={Galeria} />
                    <Route path="/Contacto" component={Contacto} />
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