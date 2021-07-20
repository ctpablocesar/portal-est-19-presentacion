import React from 'react'
import { images } from '../../../Resources/resources';
import { Header } from '../../Ui/Header';

export const Calendario = () => {
    return (
        <div>
            <Header titulo="Calendario Escolar"/>
            <div className="div-calendario">
                <a href={images.calendario} target="blank"> <img src={images.calendario} alt="imagen del calendario" className="img-fluid" /></a>
            </div>
        </div>
    )
}
