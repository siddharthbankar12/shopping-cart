import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartProducts } = useSelector((state) => state.cart);
  let navigate = useNavigate();
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "30px",
          border: "2px solid black",
          cursor: "pointer",
          position: "sticky",
          top: "0",
          backgroundColor: "white",
        }}
      >
        <h1
          onClick={() => {
            navigate("/");
          }}
        >
          All Products
        </h1>
        <h1
          onClick={() => {
            navigate("/add-product");
          }}
        >
          Add Product
        </h1>
        <h1
          onClick={() => {
            navigate("/cart");
          }}
        >
          Cart - {cartProducts.length}
        </h1>
      </div>
    </>
  );
};

export default Navbar;
