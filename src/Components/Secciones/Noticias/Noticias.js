import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNoticias } from '../../../actions/noticias';
import { Header } from '../../Ui/Header'
import { Noticia } from './Noticia';

export const Noticias = () => {

  const dispatch = useDispatch()

  const { saving } = useSelector(state => state.ui)

  const { noticias } = useSelector(state => state.noticias)

  useEffect(() => {
    dispatch(startLoadingNoticias())
  }, [saving])

  return (
    <div>
      <Header titulo="Noticias" />

      {
        !!noticias[0]
          ?
          noticias.map((noticia) => (
            noticia.status
            &&
            <Noticia noticia={noticia} key={noticia.id} />
          ))
          :
          <h1 className='sinContenido'>No hay noticias para mostrar</h1>
      }

    </div>
  )
}