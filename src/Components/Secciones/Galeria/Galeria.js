import React, { useState } from 'react';
import { useEffect } from 'react';
import ImageGallery from 'react-image-gallery';
import { useDispatch, useSelector } from 'react-redux';
import { startSavingImages } from '../../../actions/galeria';
import { images } from '../../../Resources/resources';
import '../../../Styles/portalest19.css'
import { Header } from '../../Ui/Header';

export const Galeria = () => {

    const dispatch = useDispatch()

    const { saving } = useSelector(state => state.ui)

    const { imagenes } = useSelector(state => state.galeria)

    const [imgs, setImgs] = useState([]);

    useEffect(() => {
        dispatch(startSavingImages())
        // for (let i = 0; i <= imagenes.length; i++) {
        //     if (imagenes[i].status) {
        //         setImgs([
        //             ...imgs,
        //             {
        //                 original: imagenes[i].imagen,
        //                 thumbnail: imagenes[i].imagen
        //             }
        //         ])
        //     }
        // }
    }, [saving])

    return (
        <div>
            <Header titulo="Galería" />
            <div className="galeria">
                <ImageGallery items={imgs} slideOnThumbnailOver={true} showPlayButton={false} disableThumbnailScroll={true} showFullscreenButton={false} />
            </div>
        </div>
    )
}
