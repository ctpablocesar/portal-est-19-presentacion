import React from 'react'
import { Header } from '../Ui/Header'
import { images } from '../../Resources/resources';

export const Noticias = () => {
    return (
        <div>
            <Header titulo="Noticias" />
            <div className="p-5">
                {/* inicio prueba */}
                <div className="card m-5 tarjeta-noticias" >
                    <div className="row g-0">
                        <div className="col-md-4 text-center">
                            <img src={images.maquinas} width="300" height="200" alt="imagen de la noticia" className="float-right img-fluid m-5 rounded" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body m-3">
                                <h5 className="card-title h3"><strong>Titulo de la noticia</strong></h5>
                                <p className="card-text"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae architecto ipsam, nulla earum at aut fugiat unde doloribus magnam minus id nemo, sint cum aliquid odit, quasi minima dolorem maxime. lo Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis consequatur voluptate debitis, minima unde. Harum debitis minima, officiis quis, ab odio, recusandae voluptatum deleniti illo hic perferendis molestias at.lo Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe pariatur nostrum obcaecati ipsum eius, veniam error? Laudantium, non dolor. Non nam a eum explicabo ipsam placeat neque quas sequi! In!</p>
                                <p className="card-text float-right "><small className="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* fin prueba */}
            </div>
        </div>
    )
}

                // <div className="noticias__tarjeta">
                //     <div className="noticias__tarjeta__imagen">
                //         <img src="https://s.france24.com/media/display/688585be-9060-11ea-8c8d-005056a98db9/w:1400/p:16x9/journal-1920x1080_es.webp" alt="" width="300" height="200" />
                //     </div>
                //     <div className="noticias__tarjeta__contenido">
                //         <h3>"Titulo de la noticia"</h3>
                //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ad rem quisquam provident atque aliquid velit! Sed, libero deserunt. Porro, exercitationem? Adipisci quae possimus mollitia hic provident. Dolorem, quibusdam consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum ipsum ea est, molestiae ab eaque laudantium sint, quasi, tenetur sunt. Consequuntur aliquam, assumenda consequatur distinctio natus unde tempore ut.</p>
                //         <span className="noticias__tarjeta__fecha">fecha de la noticia</span>
                //     </div>
                // </div>
                // <div className="noticias__tarjeta">
                //     <div className="noticias__tarjeta__imagen">
                //         <img src="https://s.france24.com/media/display/688585be-9060-11ea-8c8d-005056a98db9/w:1400/p:16x9/journal-1920x1080_es.webp" alt="" width="300" height="200" />
                //     </div>
                //     <div className="noticias__tarjeta__contenido">
                //         <h3>"Titulo de la noticia"</h3>
                //         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ad rem quisquam provident atque aliquid velit! Sed, libero deserunt. Porro, exercitationem? Adipisci quae possimus mollitia hic provident. Dolorem, quibusdam consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae dolorum ipsum ea est, molestiae ab eaque laudantium sint, quasi, tenetur sunt. Consequuntur aliquam, assumenda consequatur distinctio natus unde tempore ut.</p>
                //         <span className="noticias__tarjeta__fecha">fecha de la noticia</span>
                //     </div>
                // </div>