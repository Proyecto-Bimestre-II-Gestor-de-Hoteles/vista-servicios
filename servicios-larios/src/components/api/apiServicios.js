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
export const apiServicioCreate = async (nombre, precio, usuario, estado) => {
    
    try {
       
        const servicioSave = await axios.post(
            `${URL}agregar`, {
                nombre: nombre,
                precio: precio,
                usuario:usuario,
                estado:estado
        }, { headers: { "x-token": token } });
        
        return true;

    } catch ({ response: { data: { msg } } }) {
        
        if (msg === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }    {
            Swal.fire({
                icon: 'error',
                title: 'Error al agregar',
                text: msg,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}
export const apiServicioUpdate = async (id,nombre, precio, usuario, estado) => {

    try {
        const userSave = await axios.put(`${URL}editar/${id}`, {
            id: id,
            nombre: nombre,
            usuario: usuario,
            precio: precio,
            estado:estado
           
        }, { headers: { "x-token": token } });
        console.log(userSave);
        
        return true;

    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            Swal.fire({
                icon: 'info',
                title: 'Error',
                text: 'Inicie sesion de nuevo',
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.removeItem("token");
                    window.location.href = '/login';
                }
            });
        }    {
            Swal.fire({
                icon: 'error',
                title: 'Error al editar',
                text: message,
                showConfirmButton: true,
                confirmButtonText: "Ok"
            }).then((result) => {
                console.log(result);
            });
        }
    }

}
export const apiServicioDelete = async( id ) => {
    try {
        const {} = await axios.delete(`${URL}/eliminar/${id}`,
         { headers: { "x-token": token } });
         return true;
    } catch ({ response: { data: { message } } }) {
        
        if (message === 'el token ha expirado') {
            localStorage.removeItem("token");
            window.location.href = '/login';
        }
        if (message) {
            return message;
        }
    }

}