import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingFrase } from '../../../actions/frase';
import { images } from '../../../Resources/resources';
import { Frase } from './Frase';

export const Inicio = () => {

    const dispatch = useDispatch()

    const { saving } = useSelector(state => state.ui)

    const { frase } = useSelector(state => state.frase)

    useEffect(() => {
        dispatch(startLoadingFrase())
    }, [saving]);

    return (
        <div className="Inicio">
            <div
                className="page-hero-section bg-image hero-home-2"
                style={{ backgroundImage: `url(${images.patio})` }}
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
                                            <i className="fas fa-hands"></i>
                                        </div>
                                        <h5 className="fg-gray">Responsabilidad</h5>
                                        <p className="fs-small">
                                            Responder por los actos generados en la toma de decisiones, previniendo los efectos del propio comportamiento a partir de una decisión propia.                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 py-3 wow fadeInUp">
                                    <div className="card card-body border-0 text-center shadow pt-5">
                                        <div className="svg-icon mx-auto mb-4">
                                            <i className="fas fa-handshake"></i>
                                        </div>
                                        <h5 className="fg-gray">Honestidad</h5>
                                        <p className="fs-small">
                                            Establecer la congruencia a partir del sentir, pensar, decir y actuar de los servidores públicos en concordancia con los objetivos de la educación.
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-4 py-3 wow fadeInRight">
                                    <div className="card card-body border-0 text-center shadow pt-5">
                                        <div className="svg-icon mx-auto mb-4">
                                            <i className="fas fa-file-signature"></i>
                                        </div>
                                        <h5 className="fg-gray">Compromiso</h5>
                                        <p className="fs-small">
                                            Obligarse a sí mismo, a partir del propio código moral y ético, a cumplir con las políticas, misión, visión y objetivos de la institución.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Frase frase={frase} key='1' />


        </div>
    )
}
