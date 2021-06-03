import React from 'react'
import { images } from '../../Resources/resources'

export const Talleres = () => {
    return (
        <div>
            <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${images.entrada})` }}>
                <div className="hero-caption">
                    <div className="container fg-white h-100">
                        <div className="row justify-content-center align-items-center text-center h-100">
                            <div className="col-lg-6">
                                <h3 className="fondosecciones mb-4 fw-medium">Talleres</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="products-container" className="pb-5">
                <div className="container">
                    <div className="row justify-content-around">
                        {/* taller 1 */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Máquinas, herramientas y sistemas de control</h4>
                                                <div className="post-title">
                                                    <p><img className="img-fluid" src={images.maquinas} alt="maquinas" /></p>
                                                </div>
                                                {/* <div className="btn-flip"> */}
                                                <a className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-tools iconostalleres"></i>Descripción</h4>
                                                <p className="card-text des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas como conocer las propiedades de los metales,
                                                manejar herramientas manuales sencillas y limar o cortar piezas metálicas pequeñas.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Primer taller --> */}
                        {/* <!-- Segundo taller--> */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Electrónica, comunicación y sistemas de control</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.electronica} alt="electronica" /></p>
                                                </div>

                                                <a  className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-plug iconostalleres"></i>Descripción</h4>
                                                <p className="card-text  des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas como la interpretación de diagramas electrónicos, dar mantenimiento a equipo electrónico básico y localización de fallas en equipos.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- segundo taller --> */}
                        {/* tercer Taller */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Carpintería e industria de la madera</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.carpinteria} alt="carpinteria" /></p>
                                                </div>
                                                <a  className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-hammer iconostalleres"></i>Descripción</h4>
                                                <p className="card-text  des-Taller">
                                                    Ofrece a las y los alumnos elaborar prácticas sencillas como conocer las propiedades de la madera, manejar herramientas manuales sencillas y limar o cortar piezas de madera pequeñas.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- tercer taller --> */}
                        {/* <!-- cuarto taller--> */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Diseño arquitectónico</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.logo} alt="disenio" /></p>
                                                </div>

                                                <a  className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-edit iconostalleres"></i>Descripción</h4>
                                                <p className="card-text  des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas la elaboración de planos de casas,
                                                mejorar tu caligrafía y conocer los materiales que se utilizan en la construcción.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- cuarto taller --> */}
                        {/* quinto 1 */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Ofimática</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.logo} alt="ofimatica" /></p>
                                                </div>
                                                <a className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="far fa-keyboard iconostalleres"></i>Descripción</h4>
                                                <p className="card-text des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas como registrar y archivar la correspondencia y la documentación
                                                de una oficina. También a elaborar correctamente cartas, informes y recados, etc.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- quinto taller --> */}
                        {/* <!-- sexto taller--> */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Administración Contable</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.logo} alt="admon" /></p>
                                                </div>

                                                <a className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-calculator iconostalleres"></i>Descripción</h4>
                                                <p className="card-text  des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas como asesorar a las personas donde invertir su dinero, elaborar tarjetas de almacén para saber cuánta mercancía hay en existencia y administrar un negocio familiar.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- sexto taller --> */}
                        {/* septimo 1 */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Turismo</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.logo} alt="turismo" /></p>
                                                </div>
                                                <a  className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-plane iconostalleres"></i>Descripción</h4>
                                                <p className="card-text  des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas como orientar a los húespedes acerca de hoteles
                                                sobre tu ciudad, proporcionar información acerca de lugares turísticos y promover los principales platillos tradicionales de tu estado.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- septimo taller --> */}
                        {/* <!-- octavo taller--> */}
                        <div className="col-xs-12 col-sm-6 col-md-6">
                            <div className="image-flip" onTouchStart="this.classNameList.toggle('hover');">
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center"><p>
                                                {/* <p><img className=" img-fluid" src={contador} alt="card image" /> */}
                                            </p>
                                                <h4 className="card-title">Informática</h4>
                                                <div className="post-title">
                                                    <p><img className=" img-fluid" src={images.logo} alt="informatica" /></p>
                                                </div>

                                                <a className="btn card-button btn-sm"><i className="fas fa-undo-alt"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title"><i className="fas fa-desktop iconostalleres"></i>Descripción</h4>
                                                <p className="card-text des-Taller">Ofrece a las y los alumnos elaborar prácticas sencillas como procesar la información, modificarla y almacenarla por medio de la computadora, hacer uso del office
                                                para realizar trabajos de la escuela con calidad y precisión.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- octavo taller --> */}
                    </div>
                </div >
            </section >
        </div >
    )
}
