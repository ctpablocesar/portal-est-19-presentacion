import Swal from 'sweetalert2';

import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startSavingImages = () => {
    return async (dispatch) => {
        dispatch(startLoading())
        const resp = await fetchSinToken('galeria')
        const body = await resp.json()

        let imagenes = body.galeria.map((data) => (
            data.status
            &&
            {
                original: data.imagen,
                thumbnail: data.imagen
            }
        ))
        
        imagenes = imagenes.filter(word => !!word)
        if (body.ok) {
            dispatch(saveImages(imagenes))
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

const saveImages = (images) => ({
    type: types.saveImages,
    payload: images
})