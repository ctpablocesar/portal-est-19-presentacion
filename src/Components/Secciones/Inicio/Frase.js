import React from 'react'

export const Frase = ({frase: data}) => {

    const { imagen = '', titulo = '', frase = '' } = data;

    return (
        <div className="fondo-modif page-section no-scroll">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-7 wow fadeIn">
                        <div className="size-img">
                            <img src={imagen} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-5 pl-lg-5 wow fadeInUp">
                        <h2 className="mb-4 text-dark">
                            {titulo}
                        </h2>
                        <p className="mb-4">
                            {frase}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
