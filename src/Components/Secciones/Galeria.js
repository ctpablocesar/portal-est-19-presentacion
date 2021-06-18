import React from 'react';
import ImageGallery from 'react-image-gallery';
import { images } from '../../Resources/resources';
import '../../Styles/portalest19.css'
import { Header } from '../Ui/Header';

export const Galeria = () => {

    const imgs = [
        {
            original: images.maquinas,
            thumbnail: images.maquinas,
        },
        {
            original: images.ofimatica,
            thumbnail: images.ofimatica,
        },
        {
            original: images.patio,
            thumbnail: images.patio,
        },
        {
            original: images.turismo,
            thumbnail: images.turismo,
        },
        {
            original: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            thumbnail: 'https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        },
    ];

    return (
        <div>
            <Header titulo="Galería"/>
            <div className="galeria">
                <ImageGallery items={imgs} slideOnThumbnailOver={true} showPlayButton={false} disableThumbnailScroll={true} showFullscreenButton={false} />
            </div>
        </div>
    )
}
