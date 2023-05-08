import React from 'react'
import { apiServicio } from "../api/apiServicios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
export const Lista = () => {
  const [servicio, setServicio] = useState([]);

  const viewServicioList = async () => {
    const getListServiciosFromAPI = await apiServicio();

    setServicio(getListServiciosFromAPI);
  };

  useEffect(() => {
    viewServicioList();
  }, []);
  return (
    <>
      <main className="container seccion">
        <h2 style={{ color: 'balck', fontSize: '24px' }} >Cliente Servicios</h2>
        <Link to="/create-servicio" className="boton boton-verde"
        style={{
          display: 'inline-block',
          padding: '0.5rem 1rem',
          backgroundColor: 'green',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.25rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
        Nuevo Servicio
      </Link>
      <br />
        <Table  className="table  table-striped table-sm  table-bordered">
          <thead  style={{
          
          padding: '0.5rem 1rem',
          backgroundColor: 'green',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '0.25rem',
          boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        }}>
            <tr>
              <th style={{ color: 'balck', fontSize: '24px' }} scope="col" className="text-center">ID</th>
              <th style={{ color: 'balck', fontSize: '24px' }} scope="col" className="text-center">Nombre</th>
              <th style={{ color: 'balck', fontSize: '24px' }}scope="col" className="text-center">Precio</th>
              <th style={{ color: 'balck', fontSize: '24px' }}scope="col" className="text-center">Usuario</th>
              <th style={{ color: 'balck', fontSize: '24px' }}scope="col" className="text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
          {servicio.map((s) => {
            return (
              <tr key={s._id}>
                <th className="text-center">{s._id} </th>
                <td className="text-center">{s.nombre}</td>
                <td className="text-center">{s.precio}</td>
                <td className="text-center">{s.usuario}</td>
                <td className="text-center">{s.estado}</td>
               
              </tr>
            );
          })}
        </tbody>
        </Table>
        
      </main>
    </>
  )
}
