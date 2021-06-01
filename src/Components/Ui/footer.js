import '../../Styles/traction.css';
import { NavLink } from 'react-router-dom';
import { images } from '../../Resources/resources';

export const Footer = () => {
  return (
    <div className="footer-bg page-footer-section fg-white">
      <div className="container mb-5">
        <div className="row justify-content-center text-center wow fadeInUp">
          <div className="col-lg-8">
            <div className="text-center mb-3">
              <img src={images.logo} alt="" height="80" />
            </div>
            <h3 className="mb-3">
              <span className="traction">Traction</span> Software
              </h3>

            <ul className="nav justify-content-center py-3">
              <li className="nav-item">
                <NavLink to='/' className="nav-link fg-white px-4">
                    Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/nosotros' className="nav-link fg-white px-4">
                    Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/productos' className="nav-link fg-white px-4">
                    Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to='/contacto' className="nav-link fg-white px-4">
                    Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <p className="text-center mt-4 wow fadeIn">
        Copyright &copy; 2021{" "}
        <span className="fg-white fw-medium">E.S.T. 19</span>. Todos los
          derechos reservados
        </p>
    </div>

  );
}
