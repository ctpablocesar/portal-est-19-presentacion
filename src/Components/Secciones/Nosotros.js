import React from 'react'
import { images } from '../../Resources/resources'
import '../../Styles/traction.css'
import { Header } from '../Ui/Header'

export const Nosotros = () => {
    return (

        <div className="App">
            <Header titulo="Nosotros"/>
            <div className="page-section pt-5">
                <div className="container">
                    <div className="card-page mt-3">
                        <h5 className="traction">ANTECEDENTES HISTÓRICOS</h5>
                        <hr />
                        <div className="row justify-content-center">
                            <img src={images.historia} alt="" className="col-md-5" />
                            <p className="text-justify col-md-7">En el año de 1970, Manuel Francisco Peyro Carreño y un grupo de jóvenes entusiastas con gran espíritu en pro de la educación, iniciaron una ardua labor a favor de la adolescencia duranguense, de manera voluntaria y gratuita.
                            Vieron recompensados sus esfuerzos, cuando formaron una modesta escuela llamada Secundaria de Estudiantes Técnicos (ESET) que ocupó un domicilio particular, ubicado en Felipe Pescador y  Guadalupe en la actual zona centro, iniciando sus labores educativas con 160 alumnos (cuatro grupos).
                            Poco después (1972), pasaron a ocupar las instalaciones de la Escuela Primaria No. 11 “Lorenzo Rojas”, con el propósito de brindarle a la población egresada de las diferentes primarias de la ciudad, una opción más de seguir preparándose y continuar con sus estudios de educación secundaria; servicio que empezaba a ser muy necesario por su escasez, además de brindarle al alumnado del Instituto Tecnológico de Durango (I.T.D.), una opción y un espacio donde realizar su Servicio social y Prácticas Profesionales para concluir satisfactoriamente sus estudios.
                            El 29 de junio de 1972 el Ing. Manuel Francisco Peyro Carreño, recibe un oficio de la Dirección General de Educación Tecnológica, donde se le nombra oficialmente: Director de la Escuela Secundaria Tecnológica Industrial y Comercial No. 154 (ETIC No. 154).
                            Meses más tarde la Escuela Tecnológica Industrial y Comercial No. 154 se traslada a los terrenos ubicados en la calle Vicente Guerrero S/N de la Colonia Insurgentes, y a partir del 23 de octubre de 1972 entra en sus correspondientes funciones educativas.
                            En septiembre de 1979 la Escuela Tecnológica Industrial y Comercial No. 154, cambia oficialmente su nombre y se convierte en lo que hoy conocemos como:  ESCUELA SECUNDARIA TÉCNICA  19.
                        </p>
                        </div>
                    </div>
                    <div className="row align-items-start mt-5">
                        <div className="col-sm-6">
                            <div className="contenedor-misvis card-page text-center">
                                <i className=" fas fa-chart-line"></i>
                                <h5 className=" font-weight-bold text-center">Misión</h5>
                                <hr />
                                <div className="mision-nosotros">
                                    <p className="text-justify">Brindar una educación humanística a los estudiantes a través del desarrollo de los conocimientos, habilidades y valores para su formación integral, a fin de que ejerzan una ciudadanía competente, comprometida y continúen aprendiendo a lo largo de la vida.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="contenedor-misvis card-page text-center">
                                <i className="far fa-thumbs-up"></i>
                                <h5 className="traction font-weight-bold text-center">Visión</h5>
                                <hr />
                                <p className="text-justify">Se percibe la institución en un futuro inmediato renovada con su personal capacitado y actualizado, trabajando los contenidos curriculares con el uso de las tecnologías de la información y comunicación, considerando los intereses y necesidades de los alumnos, basados en el desarrollo de competencias (para el aprendizaje permanente, manejo de la información, manejo de situaciones y competencias para la vida en sociedad) y optimizando al máximo los recursos materiales, financieros y humanos, en un ambiente de armonía, respeto y cooperación entre todos los miembros de la comunidad escolar, en donde se imparta una educación de calidad para el desarrollo humano integral a través de la participación de docentes, padres y madres de familia, directivos y autoridades para satisfacer las necesidades fundamentales de los estudiantes en un ambiente de respeto, justicia y democracia. </p>
                            </div>
                        </div>
                    </div>
                    <div className="card-page mt-3">
                        <h5 className="traction">ORGANIGRAMA</h5>
                        <hr />
                        <div className="row justify-content-center">
                            <img src={images.organigrama} className="img-fluid" alt="" />
                        </div>
                    </div>
                    <div className="card-page mt-3">
                        <h5 className="traction">INFRAESTRUCTURA</h5>
                        <hr />
                        <h5 className="text-center text-dark">Nuestra Escuela cuenta con:</h5>
                        <div className="row justify-content-center">
                           
                            <ul className="text-dark">
                                <li>Veintisiete aulas.</li>
                                <li>Dos laboratorios de ciencias.</li>
                                <li>1 biblioteca.</li>
                                <li>1 aulas de medios con equipo de cómputo e internet.</li>
                                <li>2 aulas digitales.</li>
                                <li>1 sala audiovisual.</li>
                                <li>8 tecnologías.</li>
                                <li>Departamento académico, tecnológico y de trabajo social.</li>
                                <li>Departamento de apoyo para alumnos.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
