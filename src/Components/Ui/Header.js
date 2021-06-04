import React from 'react'
import { images } from '../../Resources/resources'

export const Header = ({titulo}) => {
    return (
        <div className="page-hero-section bg-image hero-mini" style={{ backgroundImage: `url(${images.entrada})` }}>
            <div className="hero-caption">
                <div className="container fg-white h-100">
                    <div className="row justify-content-center align-items-center text-center h-100">
                        <div className="col-lg-6">
                            <h3 className="fondosecciones mb-4 fw-medium">{titulo}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
