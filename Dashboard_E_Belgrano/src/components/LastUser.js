import React from "react";

function LastUser({ props }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último usuario agregado
          </h5>
        </div>
        {props.lastUser.length > 0 && (
          <div class="card-body">
            <h5 class="card-title">{props.lastUser[0].name}</h5>
            <p class="card-text">
              {" "}
              <strong>Nombre: </strong>
              {props.lastUser[0].name}
            </p>
            <p class="card-text">
              {" "}
              <strong>Apellido: </strong>
              {props.lastUser[0].lastName}
            </p>
            <p class="card-text">
              {" "}
              <strong>Fecha de nacimiento: </strong>
              {props.lastUser[0].birthDate}
            </p>
            <p class="card-text">
              {" "}
              <strong>Direccion: </strong>
              {props.lastUser[0].address}
            </p>
            <p class="card-text">
              {" "}
              <strong>Imagen: </strong>
              {props.lastUser[0].image}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LastUser;
