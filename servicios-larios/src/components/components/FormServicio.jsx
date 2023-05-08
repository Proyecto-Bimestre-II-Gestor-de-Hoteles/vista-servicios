import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";
import { formOptions, formServicioHelper } from "../helpers/formServicio";
import { useEffect } from "react";

export const FormServicio = ({ servicioProp, titleButton, option }) => {

  const [servicio, setServicio] = useState(servicioProp);
  console.log(servicioProp);
  const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm(formOptions);

useEffect(() => {
  setServicio({ ...servicio });
}, []);


const crud = async () => {

  await formServicioHelper(servicio, option);

}
  return (
    <>
       <main >
       <Link className="boton boton-verde" to="/"style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: 'green',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.25rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}>Volver</Link>
                <form className="formulario" onSubmit={handleSubmit(crud)}>
                    <fieldset className="mt-5">
                        <legend>Informacion General</legend>
                        <label >Nombre del Servicio</label>
                        <input
                            {...register("nombre")}
                            type="text"
                            className="form-control"
                            value={servicio.nombre}
                            onChange={({ target: { value } }) => {
                                setServicio(() => ({ ...servicio,nombre: value }));
                            }
                            }
                        />
                        {errors.nombre && (<span>{errors.nombre.message}</span>)}

                        <label >Precio</label>
                        <input
                            {...register("precio")}
                            type="number"
                            className="form-control"
                            value={servicio.precio}
                            onChange={({ target: { value } }) => {
                                setServicio(() => ({ ...servicio,precio: value }));
                            }
                            }
                        />
                        {errors.precio && (<span>{errors.precio.message}</span>)}
                        <label >Usuario</label>
                        <input
                            {...register("usuario")}
                            type="text"
                            className="form-control"
                            value={servicio.usuario}
                            onChange={({ target: { value } }) => {
                                setServicio(() => ({ ...servicio,usuario: value }));
                            }
                            }
                        />
                        {errors.usuario && (<span>{errors.usuario.message}</span>)}
                        <label ></label>
                        <input
                            {...register("estado")}
                            type="text"
                            className="form-control"
                            value={servicio.estado}
                            onChange={({ target: { value } }) => {
                                setServicio(() => ({ ...servicio,estado: value }));
                            }
                            }
                        />
                        {errors.estado && (<span>{errors.estado.message}</span>)}
                       
                    </fieldset>
                    <button type="submit" className="btn btn-success" >{titleButton}</button>
                </form>
            </main>
    </>
  )
}
