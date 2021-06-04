import React from 'react'
import { images } from '../../Resources/resources';
import { Header } from '../Ui/Header';

export const Calendario = () => {
    return (
        <div>
            <Header titulo="Calendario Escolar"/>
            <div className="div-calendario">
                <img src={images.calendario} alt="imagen del calendario" className="calendario-img" />
            </div>
        </div>
    )
}
