import React from 'react'
import Moment from 'react-moment'
import 'moment/locale/es';

export const Anuncio = ({ anuncio }) => {

    const { titulo, descripcion, imagen, tituloImagen, fecha } = anuncio

    return (
        <div className="card col-sm-5 tarjeta-noticias m-3" >
            <div className="row no-gutters">
                <div className="col-sm-5 p-3">
                    <img className="card-img" src={imagen} alt={tituloImagen} />
                </div>
                <div className="col-sm-7">
                    <div className="card-body">
                        <h5 className="card-title"><strong>{titulo}</strong></h5>
                        <p className="card-text">{descripcion}</p>
                        <p className="card-text text-right"><small className="text-muted"><Moment fromNow>{fecha}</Moment></small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
