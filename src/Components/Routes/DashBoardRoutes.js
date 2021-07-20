import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ScrollToTop from 'react-scroll-up';

import { Footer } from '../Ui/Footer';
import { Navbar } from '../Ui/Navbar';

import { Nosotros } from '../Secciones/Nosotros';
import { Talleres } from '../Secciones/Talleres';
import { Inicio } from '../Secciones/Inicio/Inicio';
import { Noticias } from '../Secciones/Noticias/Noticias';
import { Anuncios } from '../Secciones/Anuncios/Anuncios';
import { Calendario } from '../Secciones/Calendario/Calendario';
import { Galeria } from '../Secciones/Galeria/Galeria';
import { Contacto } from '../Secciones/Contacto/Contacto';

export const DashBoardRoutes = () => {
    return (
        <>
            <Navbar />
            <div>
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