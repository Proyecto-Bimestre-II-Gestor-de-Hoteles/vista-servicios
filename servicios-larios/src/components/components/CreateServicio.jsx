import React from 'react'
import { Servicio } from "../models/servicioM"
import { FormServicio } from './FormServicio'

export const CreateServicio = () => {
  return (
    <>
    <div className="container">
        <h1>Crear un Servicio</h1>
        <FormServicio servicioProp={Servicio}
            titleButton={'Crear Hotel'}
            option={1} />
    </div>
</>
  )
}
