import React from 'react'
import Moment from 'react-moment';
import 'moment/locale/es';

export const Noticia = ({ noticia }) => {

    const { imagen, titulo, descripcion, tituloImagen, fecha, link = '' } = noticia

    return (
        <div className="container py-3 col-md-10">
            <div className="card tarjeta-noticias">
                <div className="row p-4">
                    <div className="col-md-4">
                        <a href={imagen} target="_blank"><img className="card-img modal-img" src={imagen} alt={tituloImagen} style={{ cursor: 'pointer' }} /></a>
                    </div>
                    <div className="col-md-8 px-3">
                        <div className="card-block px-3">
                            <h4 className="card-title">{titulo}</h4>
                            <p className="card-text">{descripcion}</p>
                            <a href={link} target='_blank'>{link}</a>
                            <p className="card-text text-right"><small className="text-muted"><Moment fromNow>{fecha}</Moment></small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
