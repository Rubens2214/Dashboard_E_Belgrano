import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import "../assets/css/login.css";

function App() {
  const [products, setProducts] = useState([]);
  const [lastProduct, setLastProduct] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [lastUser, setLastUser] = useState([]);

  const fetchProducts = () => {
    fetch("/products/api")
      .then((response) => response.json())
      .then((datos) => {
        setProducts(datos.data);
      });
  };

  const fetchLastProduct = () => {
    fetch("/products/apiLastProduct")
      .then((response) => response.json())
      .then((datos) => {
        setLastProduct(datos.data);
      });
  };

  const fetchCategories = () => {
    fetch("/categories")
      .then((response) => response.json())
      .then((datos) => {
        setCategories(datos.data);
      });
  };

  const fetchUsers = () => {
    fetch("/users/api")
      .then((response) => response.json())
      .then((datos) => {
        setUsers(datos.data);
      });
  };

  const fetchLastUser = () => {
    fetch("/users/apiLastUser")
      .then((response) => response.json())
      .then((datos) => {
        setLastUser(datos.data);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    fetchLastProduct();
  }, []);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    fetchLastUser();
  }, []);

  const props = {
    products: products,
    lastProduct: lastProduct,
    users: users,
    lastUser: lastUser,
    categories: categories,
  };
  return (
    <React.Fragment>
      <div id="wrapper">
        <SideBar props={props} />
      </div>
    </React.Fragment>
  );
}

export default App;
