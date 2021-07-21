import React from 'react'
import { Header } from '../../Ui/Header'
import { images } from '../../../Resources/resources';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { startLoadingAnuncios } from '../../../actions/anuncios';
import { Anuncio } from './Anuncio';

export const Anuncios = () => {

    const dispatch = useDispatch()

    const { saving } = useSelector(state => state.ui)

    const { anuncios } = useSelector(state => state.anuncios)

    useEffect(() => {
        dispatch(startLoadingAnuncios())
    }, [saving])

    return (
        <div>
            <Header titulo="Anuncios" />

            <div className=" cards-responsivas w-100 row justify-content-md-center">


                {
                    !!anuncios[0]
                        ?
                        anuncios.map((anuncio) => (
                            anuncio.status
                            &&
                            <Anuncio anuncio={anuncio} key={anuncio.id} />
                        ))
                        :
                        <h1 className='sinContenido'>No hay noticias para mostrar</h1>
                }

            </div>

        </div>
    )
}