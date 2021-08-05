import { types } from "../Types/types"

const initialState = {
    anuncios: []
}

export const anunciosReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveAnuncios:
            return {
                ...state,
                anuncios: action.payload
            }
        default:
            return state
    }
}