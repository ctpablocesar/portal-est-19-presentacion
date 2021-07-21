import Swal from 'sweetalert2';

import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startLoadingAnuncios = () => {
    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchSinToken('anuncios')
        const body = await resp.json()

        if (body.ok) {
            dispatch(saveAnuncios(body.anuncios))
        } else {
            Swal.fire({
                icon: 'error',
                title: body.msg,
                showConfirmButton: false,
                timer: 1500
            })
        }

        dispatch(finishLoading())

    }
}

const saveAnuncios = (anuncios) => ({
    type: types.saveAnuncios,
    payload: anuncios
})