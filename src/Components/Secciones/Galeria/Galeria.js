import React from 'react';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from 'react-redux';
import { startSavingImages } from '../../../actions/galeria';
import '../../../Styles/portalest19.css'
import { Header } from '../../Ui/Header';

export const Galeria = () => {

    const dispatch = useDispatch()

    const { saving } = useSelector(state => state.ui)

    const { imagenes } = useSelector(state => state.galeria)

    useEffect(() => {
        dispatch(startSavingImages())
    }, [saving])

    return (
        <div>
            <Header titulo="Galería" />
            <div className="galeria">
                {
                    !!imagenes[0]
                        ?
                        <ImageGallery items={imagenes} slideOnThumbnailOver={true} showPlayButton={false} disableThumbnailScroll={true} showFullscreenButton={false} />
                        :
                        <h1 className='sinContenido'>No hay imágenes para mostrar</h1>
                }
            </div>
        </div>
    )
}
