import axios from 'axios';
import Swal from 'sweetalert2';
const token = localStorage.getItem('token');

const URL = "http://localhost:8080/api/servicios/";


export const apiServicio = async () => {
    try {

        const { data: { listaServicios } } = await axios.get(`${URL}`,
        { headers: { "x-token": token } });
        console.log(listaServicios);
        return listaServicios;

    } catch ({ response: { data: { message } } }) {
        return data.message;
    }

}