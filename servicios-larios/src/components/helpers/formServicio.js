import Swal from "sweetalert2"
import { apiServicioCreate,apiServicioUpdate } from "../api/apiServicios";

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const formSchema = Yup.object().shape({
    nombre: Yup.string().required('El nombre es requerido'),
    usuario: Yup.string(),
    precio: Yup.number().required('El precio es requerido'),
    estado: Yup.string(),
});

export const formOptions = { resolver: yupResolver(formSchema) }; 

export const formServicioHelper = async (servicio, option) => {

    let resultado;
    
    switch (option) {
        case 1:
            resultado = await apiServicioCreate(
                servicio.nombre,
                servicio.precio,
                servicio.usuario,
                servicio.estado
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "servicio creado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
        break;

        case 2:
          
          console.log(servicio);
            resultado = await apiServicioUpdate(
                servicio._id,
                servicio.nombre,
                servicio.precio,
                servicio.usuario,
                servicio.estado
            );
           
            if (resultado) {
                Swal.fire({
                    icon: "success",
                    title: "Todo bien",
                    text: "servicio editado correctamente",
                    showConfirmButton: true,
                    confirmButtonText: "Go  !"
                }).then((r) => {
                    if (r.isConfirmed) {
                        window.location.href = '/'
                    } else {
                        window.location.href = '/'
                    }
                })
            }
        break;
    }



}