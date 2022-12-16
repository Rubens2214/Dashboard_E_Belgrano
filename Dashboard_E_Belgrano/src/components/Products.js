import React, {useState, useEffect} from "react";


  function Products({props}){
  {/* xq no funciona el products.data.data? */}
    console.log(props.products)
   
     return (
    <>
<div className="row mx-auto">
<div className="col-lg-12 text-center card-header">
<h1 className="m-2">Products in Database</h1>
</div>
{props.products.length > 0 && 
            props.products.map(product => (
                
              <>
              <div class="card shadow" style={{width: "18rem", margin: "1rem",maxHeight: "20rem"}}>
                  <div class="card-body">
                    <h5 class="card-title"> <strong>Producto N°: </strong> {product.id}</h5>
                    <p class="card-text"> <strong>Price: </strong>$ {product.novaPrice}</p>
                    <p class="card-text"> <strong>Discount: </strong> {product.discount}%</p>
                    <p class="card-text"> <strong>IVA: </strong> {product.vat}%</p>
                    <p class="card-text"> <strong>Stock: </strong> {product.stock}</p>
                    <p class="card-text"> <strong>Stock Minimo: </strong> {product.stock_min}</p>
                    <p class="card-text"> <strong>Category id Nunero: </strong> {product.category_id}</p> 
                    <p class="card-text"> <strong>Subcategory id Numero </strong> {product.Subcategory_id}</p>
                  </div>
                </div> 
              </>
  ))}
    </div>
    </>
    
      )
}

export default Products;