import React from "react";

function Users({ props }) {
  // console.log(props)

  return (
    <>
      <div className="row mx-auto">
        <div className="col-lg-12 text-center card-header">
          <h1 className="m-2">Usuarios en la Base de Datos</h1>
        </div>

        {props.users.length > 0 &&
          props.users.map((user) => (
            <>
              <div
                class="card shadow"
                style={{ width: "18rem", margin: "1rem", maxHeight: "20rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title">{user.name}</h5>
                  <p class="card-text">
                    {" "}
                    <strong>Nombre: </strong>
                    {user.name}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Apellido: </strong>
                    {user.lastName}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Fecha de nacimiento: </strong>
                    {user.birthDate}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Direccion: </strong>
                    {user.address}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Imagen: </strong>
                    {user.image}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Users;
