import '../../Styles/portalest19.css';
import { NavLink } from 'react-router-dom';
import { images } from '../../Resources/resources';

export const Footer = () => {
  return (
    <div className="footer-bg page-footer-section fg-white">
      <div className="container mb-5">
        <div className="row justify-content-center text-center wow fadeInUp">
          <div className="col-lg-8">
            <div className="text-center mb-3">
              <img src={images.logo} alt="" height="80" className="logofooter" />
            </div>
            <h3 className="mb-3">
              <span className="traction">Escuela Secundaria Técnica</span> No. 19
              </h3>
            <ul className="nav justify-content-center py-3">
              <li className="nav-item">
                <NavLink to='/' className="nav-link fg-white px-4 hoover-footer">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/nosotros' className="nav-link fg-white px-4 hoover-footer">
                  <span>Nosotros</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/talleres' className="nav-link fg-white px-4 hoover-footer">
                  Talleres
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/noticias' className="nav-link fg-white px-4 hoover-footer">
                  Noticias
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/anuncios' className="nav-link fg-white px-4 hoover-footer">
                  Anuncios
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/calendario' className="nav-link fg-white px-4 hoover-footer">
                  Calendario
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/galeria' className="nav-link fg-white px-4 hoover-footer">
                  Galería
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contacto' className="nav-link fg-white px-4 hoover-footer">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center mt-4 wow fadeIn">
        <span className="fg-white">
          Copyright &copy; 2021{" "}
          <span className="traction"> E.S.T. 19.</span>Todos los
          derechos reservados</span>
      </p>
    </div>

  );
}

            // <ul className="nav justify-content-center py-3">
            //   <li className="nav-item">
            //     <NavLink to='/' className="nav-link fg-white px-4">
            //         Inicio
            //     </NavLink>
            //   </li>
            //   <li className="nav-item">
            //     <NavLink to='/nosotros' className="nav-link fg-white px-4">
            //         Nosotros
            //     </NavLink>
            //   </li>
            //   <li className="nav-item">
            //     <NavLink to='/productos' className="nav-link fg-white px-4">
            //         Productos
            //     </NavLink>
            //   </li>
            //   <li className="nav-item">
            //     <NavLink to='/contacto' className="nav-link fg-white px-4">
            //         Contacto
            //     </NavLink>
            //   </li>
            // </ul>