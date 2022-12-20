import React from "react";

function Products({ props }) {
  console.log(props.products);

  return (
    <>
      <div className="row mx-auto">
        <div className="col-lg-12 text-center card-header">
          <h1 className="m-2">Productos en la Base de Datos</h1>
        </div>
        {props.products.length > 0 &&
          props.products.map((product) => (
            <>
              <div
                class="card shadow"
                style={{ width: "18rem", margin: "1rem", maxHeight: "24rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title">
                    {" "}
                    <strong>Producto N°: </strong> {product.id}
                  </h5>
                  <p class="card-text">
                    {" "}
                    <strong>Precio -sin IVA-: </strong>$ {product.nonvatPrice}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Descuento: </strong> {product.discount}%
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>IVA: </strong> {product.vat}%
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Stock: </strong> {product.stock}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Stock Minimo: </strong> {product.stock_min}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Categoria: </strong> {product.category.name}
                  </p>
                  <p class="card-text">
                    {" "}
                    <strong>Subcategoria: </strong> {product.subcategory.name}
                  </p>
                </div>
              </div>
            </>
          ))}
      </div>
    </>
  );
}

export default Products;
