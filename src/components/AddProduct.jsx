import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/slices/cartSlice";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [addPro, setAddPro] = useState({
    id: "",
    name: "",
    price: "",
  });

  function handleChange(event) {
    setAddPro((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!addPro.id || !addPro.name || !addPro.price) {
      alert("Please fill all fields");
      return;
    }

    dispatch(addProduct(addPro));
    console.log(addPro);
    setAddPro({
      id: "",
      name: "",
      price: "",
    });
  }

  return (
    <>
      <div className="container" style={{ flexDirection: "column" }}>
        <h2 style={{ marginBottom: "15px" }}>Add Product Details</h2>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "300px",
            gap: "15px",
            border: "1px solid black",
            padding: "25px",
          }}
        >
          <input
            type="text"
            placeholder="Enter product ID"
            onChange={handleChange}
            name="id"
            value={addPro.id}
          />
          <input
            type="text"
            placeholder="Enter product name"
            onChange={handleChange}
            name="name"
            value={addPro.name}
          />

          <input
            type="number"
            placeholder="Enter product price"
            onChange={handleChange}
            name="price"
            value={addPro.price}
          />

          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
