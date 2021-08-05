import { fetchSinToken } from "../Helpers/fetch"
import Swal from 'sweetalert2';

export const sendMessage = ({ nombre, telefono, correo, asunto, mensaje }) => {
    console.log({ nombre, telefono, correo, asunto, mensaje })
    return async () => {
        const resp = await fetchSinToken('contacto', { nombre, telefono, correo, asunto, mensaje }, 'POST')
        const body = await resp.json()
        if (body.ok) {
            Swal.fire({
                icon: 'success',
                title: 'Mensaje enviado exitosamente',
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: body.msg,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
}