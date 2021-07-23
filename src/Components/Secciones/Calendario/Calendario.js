import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { startSavingCalendario } from '../../../actions/calendario';
import { Header } from '../../Ui/Header';

export const Calendario = () => {

    const dispatch = useDispatch()

    const { saving } = useSelector(state => state.ui)

    const { calendario } = useSelector(state => state.calendario)

    useEffect(() => {
        dispatch(startSavingCalendario())
    }, [saving])

    return (
        <div>
            <Header titulo="Calendario Escolar" />
            <div className="div-calendario">
                <a href={calendario} target="blank"> <img src={calendario} alt="imagen del calendario" className="img-fluid" /></a>
            </div>
        </div>
    )
}
