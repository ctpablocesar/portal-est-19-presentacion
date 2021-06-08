import React from 'react'
import { Header } from '../Ui/Header';


export const Contacto = () => {
  return (
    <div>
      <div>
        <Header titulo="Contacto" />

        <div className="page-section">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 my-3 wow fadeInUp">
                <div className="card-page">
                  <div className="row row-beam-md">
                    <div className="col-md-4 text-center py-3 py-md-2">
                      <i className="fas fa-map-marker-alt h3"></i>
                      <p className="contactstyle fw-medium fs-vlarge">Ubicación:</p>
                      <p className="ubicacion mb-0">Avenida, General Vicente Guerrero s/n, Insurgentes, 34130 Durango, Dgo.</p>
                    </div>
                    <div className="col-md-4 text-center py-3 py-md-2">
                      <i className="fas fa-phone-alt h3"></i>
                      <p className="contactstyle fw-medium fs-vlarge">Contacto</p>
                      <a id="tels" className="mb-1" href="tel:+526188116727">+52 618-811-67-27</a>
                    </div>
                    <div className="col-md-4 text-center py-3 py-md-2">
                      <i className="fas fa-envelope-open-text h3"></i>
                      <p className="contactstyle fw-medium fs-vlarge">Correo</p>
                      <a id="email" href="mailto:est19dgomx@gmail.com" className="mb-1">est19dgomx@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white contact4 overflow-hidden position-relative">
                <div className="row no-gutters">
                  <div className="container p-0">
                    <div className="col-lg-6 contact-box mb-4">
                      <div className="">
                        <h1 className="title font-weight-light text-dark pt-2 ml-3">¡Contáctanos!</h1>
                        <form className="pt-3">
                          <div className="row">
                            <div className="col-lg-12">
                              <div className="form-group pt-2 ml-3">
                                <input className="form-control text-dark" type="text" placeholder="Nombre" required />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group pt-2 ml-3">
                                <input className="form-control text-dark" type="tel" placeholder="Teléfono" required />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group pt-2 ml-3">
                                <input className="form-control text-dark" type="email" placeholder="Correo Electrónico" required />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group pt-2 ml-3">
                                <input className="form-control text-dark" type="text" placeholder="Asunto" required />
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="form-group pt-2 ml-3">
                                <textarea className="form-control text-dark" rows="3" placeholder="Mensaje" required></textarea>
                              </div>
                            </div>
                            <div className="col-lg-12 d-flex align-items-center pt-2 ml-3">
                              <button type="submit" className="btn bg-success text-inverse px-3 py-2"><span> Enviar</span></button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 right-image p-r-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.5909100780646!2d-104.67661758448833!3d24.010218984461993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869b68dd1de21f35%3A0x4db9768746b3fa8c!2sEscuela%20Secundaria%20T%C3%A9cnica%20N%C2%BA%2019%20Ing.%20Manuel%20Francisco%20Peyro%20Carre%C3%B1o!5e0!3m2!1ses!2smx!4v1622819264897!5m2!1ses!2smx"
                      width="100%" height="538"style={{ border: 0 }} data-aos="fade-left" data-aos-duration="3000" title="ubicacion de la escuela"></iframe>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
