import React from "react";
import { useEffect, useState } from "react";
import { apiServicio } from "../api/apiServicios";
import { apiServicioDelete } from "../api/apiServicios";
import { UpdateServicio } from "./UpdateServicio";
import { Servicio } from "../models/servicioM";
import { Link } from "react-router-dom";
import { Table } from 'react-bootstrap';
export const ListServicio = () => {
  const [servicio, setServicio] = useState([]);
  const [servicioM, setServicioM] = useState(Servicio);
  const [showModal, setShowModal] = useState(false);

  const viewServicioList = async () => {
    const getListServiciosFromAPI = await apiServicio();

    setServicio(getListServiciosFromAPI);
  };

  useEffect(() => {
    viewServicioList();
  }, []);
  //---Modal--
  useEffect(() => {
    viewServicioList();
  }, [showModal]);
  const handleOpenModal = (s) => {

    setShowModal(true);
    setServicioM(s);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  //--ELIMINAR--

  const eliminarHotel = async (id) => {
    let result = await apiServicioDelete(id);
    if (result) {
      setServicio(servicio.filter((s) => s._id !== id));
      Swal.fire({
        icon: "success",
        title: "Hotel Eliminado",
        text: "Se ha eliminado correctamente",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "info",
        title: "Error",
        text: "No se ha podido eliminar",
        showConfirmButton: true,
        confirmButtonText: "Ok",
      });
    }
  };
  console.log(servicioM);
  return (
    <>
      <main className="container seccion">
        <h2 style={{ color: 'balck', fontSize: '24px' }} >Administrador de Servicios</h2>
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
              <th style={{ color: 'balck', fontSize: '24px' }}scope="col" className="text-center">Option</th>
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
                <td>
                   <button
                    className="btn btn-danger ms-2 "
                    onClick={() => eliminarHotel(s._id)}
                  >
                    Eliminar
                  </button> 
                  <button
                    className="btn btn-warning ms-2 "
                    onClick={() => handleOpenModal(s)}
                  >
                    Editar
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
        </Table>
        <UpdateServicio
        servicioEdit={servicioM}
        isOpen={showModal}
        onClose={() => handleCloseModal()}
      ></UpdateServicio>
      </main>
    </>
  );
};
