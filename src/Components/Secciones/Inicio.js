import React from 'react'
import { Link } from 'react-router-dom';
import {images} from '../../Resources/resources';

export const Inicio = () => {
    return (
        <div className="Inicio">
            <div
                className="page-hero-section bg-image hero-home-2"
                style={{backgroundImage: `url(${images.patio})`}} 
            >
                <div className="hero-caption">
                    <div className="container fg-white h-100">
                        <div className="row align-items-center h-100">
                            <div className="col-lg-12 wow fadeInUp text-center fondotitulos">
                                <h1 className="mb-4 fw-normal ">ESCUELA SECUNDARIA TÉCNICA No.19</h1>
                                <p className="mb-4">ING. MANUEL FRANCISCO PEYRO CARREÑO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="page-section no-scroll">
                <div className="container">
                    <h2 className="text-center wow fadeIn">Nuestros Valores</h2>

                    <div className="row justify-content-center mt-5">
                        <div className="col-lg-10">
                            <div className="row justify-content-center">
                                <div className="col-md-6 col-lg-4 py-3 wow fadeInLeft">
                                    <div className="card card-body border-0 text-center shadow pt-5">
                                        <div className="svg-icon mx-auto mb-4">
                                            <i className="fas fa-file-invoice"></i>
                                        </div>
                                        <h5 className="fg-gray">Pago Seguro</h5>
                                        <p className="fs-small">
                                            En nuestra empresa nos encargamos de cumplir con la mayor
                                            seguridad para que tu pago no sufra afectaciones de
                                            terceros
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                                    <div className="card card-body border-0 text-center shadow pt-5">
                                        <div className="svg-icon mx-auto mb-4">
                                            <i className="far fa-lightbulb"></i>
                                        </div>
                                        <h5 className="fg-gray">Adaptabilidad</h5>
                                        <p className="fs-small">
                                            Nos encargaremos de desarrollar lo que necesites, nos
                                            adaptamos a cualquier idea y presupuesto con el que
                                            cuentes
                    </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 py-3 wow fadeInRight">
                                    <div className="card card-body border-0 text-center shadow pt-5">
                                        <div className="svg-icon mx-auto mb-4">
                                            <i className="fas fa-mobile-alt"></i>
                                        </div>
                                        <h5 className="fg-gray">Concepto</h5>
                                        <p className="fs-small">
                                            Nuestro principal objetivo es contar con clientes
                                            satisfechos, por eso se crea un concepto único para cada
                                            uno según lo requerido
                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="fondo-modif page-section no-scroll">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7 wow fadeIn">
                            <div className="size-img">
                                {/* <img src={ti} alt="" /> */}
                            </div>
                        </div>
                        <div className="col-lg-5 pl-lg-5 wow fadeInUp">
                            <h2 className="mb-4 text-dark">
                                Soluciones de Tecnologías de la Información
                            </h2>
                            <p className="mb-4">
                                Resolvemos situaciones relacionadas a Redes, Desarrollo móvil y
                                web, Bases de datos, Testing, Internet de las cosas, ¡y mucho
                                más!
                            </p>
                            <Link to='/nosotros' className="btn btn-primary rounded-pill">
                                Sobre nosotros
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
