import React from 'react';
import ImageGallery from 'react-image-gallery';
import {images} from '../../Resources/resources';
import '../../Styles/traction.css'

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
            <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${images.entrada})` }}>
                <div className="hero-caption">
                    <div className="container fg-white h-100">
                        <div className="row justify-content-center align-items-center text-center h-100">
                            <div className="col-lg-6">
                                <h3 className="fondosecciones mb-4 fw-medium">Galeria</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="galeria">
                <ImageGallery items={imgs} slideOnThumbnailOver={true} showPlayButton={false} disableThumbnailScroll={true} showFullscreenButton={false} />
            </div>
        </div>
    )
}
