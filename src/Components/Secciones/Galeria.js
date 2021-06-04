import React from 'react';
import ImageGallery from 'react-image-gallery';
import '../../Styles/traction.css'
import { Header } from '../Ui/Header';

export const Galeria = () => {

    const imgs = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
            thumbnail: 'https://images.pexels.com/photos/357271/pexels-photo-357271.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
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
