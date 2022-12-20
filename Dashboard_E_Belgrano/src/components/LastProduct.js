import React from "react";

function LastProduct({ props }) {
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Último producto agregado
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {props.lastProduct.length > 0 && (
              <div class="card-body">
                <h5 class="card-title">
                  {" "}
                  <strong>Producto N°: </strong> {props.lastProduct[0].id}
                </h5>
                <p class="card-text">
                  {" "}
                  <strong>Precio -sin IVA-: </strong>${" "}
                  {props.lastProduct[0].nonvatPrice}
                </p>
                <p class="card-text">
                  {" "}
                  <strong>Descuento: </strong> {props.lastProduct[0].discount}%
                </p>
                <p class="card-text">
                  {" "}
                  <strong>IVA: </strong> {props.lastProduct[0].vat}%
                </p>
                <p class="card-text">
                  {" "}
                  <strong>Stock: </strong> {props.lastProduct[0].stock}
                </p>
                <p class="card-text">
                  {" "}
                  <strong>Stock Minimo: </strong>{" "}
                  {props.lastProduct[0].stock_min}
                </p>
                <p class="card-text">
                  {" "}
                  <strong>Categoria: </strong>{" "}
                  {props.lastProduct[0].category.name}
                </p>
                <p class="card-text">
                  {" "}
                  <strong>Subcategoria: </strong>{" "}
                  {props.lastProduct[0].subcategory.name}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastProduct;
