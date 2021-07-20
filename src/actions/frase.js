import { fetchSinToken } from "../Helpers/fetch"
import { types } from "../Types/types"
import { finishLoading, startLoading } from "./ui"

export const startLoadingFrase = () => {
    return async (dispatch) => {

        dispatch(startLoading())

        const resp = await fetchSinToken('frase')
        const body = await resp.json()

        if (body.ok) {
            const { imagen, titulo, frase } = body.frase[0]
            dispatch(saveFrase(imagen, titulo, frase))
        } else {

        }

        dispatch(finishLoading())

    }
}

const saveFrase = (imagen, titulo, frase) => ({
    type: types.saveFrase,
    payload: {
        imagen,
        titulo,
        frase
    }
})