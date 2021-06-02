import '../../Styles/traction.css';
import { NavLink } from 'react-router-dom';
import { images } from '../../Resources/resources';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark navbar-floating">
            <div className="container">
                <NavLink to='/' className="navbar-brand">
                        <img
                            src={images.logo}
                            className="logofooter"
                            alt=""
                            height="90"
                            width="100"
                        />
                </NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarToggler"
                    aria-controls="navbarToggler"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarToggler">
                    <ul className="navbar-nav ml-auto mt-3 mt-lg-0">
                        <li className="nav-item">
                            <NavLink to='/' className="nav-link diseño-active">
                                    Inicio
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/nosotros' className="nav-link diseño-active">
                                    Nosotros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/talleres' className="nav-link diseño-active">
                                    Talleres
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/noticias' className="nav-link diseño-active">
                                    Noticias
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/anuncios' className="nav-link diseño-active">
                                    Anuncios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/calendario' className="nav-link diseño-active">
                                    Calendario
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/galeria' className="nav-link diseño-active">
                                    Galería
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contacto' className="nav-link diseño-active">
                                    Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
