import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/es';

export const Anuncio = ({ anuncio }) => {

    const { titulo, descripcion, imagen, tituloImagen, fecha, link = '' } = anuncio

    return (
        <div className="card col-sm-5 tarjeta-noticias m-3" >
            <div className="row no-gutters">
                <div className="col-sm-5 p-3">
                    <a href={imagen} target="_blank" >
                        <img
                            className="card-img modal-img"
                            src={imagen}
                            alt={tituloImagen}
                            style={{ cursor: 'pointer' }}
                        />
                    </a>
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title"><strong>{titulo}</strong></h5>
                        <p className="card-text">{descripcion}</p>
                        <a href={link} target='_blank'>{link}</a>
                        <p className="card-text text-right">
                            <small className="text-muted">
                                <Moment fromNow>{fecha}</Moment>
                            </small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
















