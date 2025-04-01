import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart } from "../store/slices/cartSlice";

const AllProducts = () => {
  const { allProducts, cartProducts } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const [addToCart, setAddToCart] = useState([]);

  const handleCartSubmit = (idx) => {
    const selectedProduct = allProducts[idx];

    const isAlreadyInCart = cartProducts.find(
      (product) => product.id === selectedProduct.id
    );

    if (isAlreadyInCart) {
      alert("Product is already added to the cart");
    } else {
      dispatch(updateCart(selectedProduct));
      setAddToCart(selectedProduct);
      alert("Product is added to the cart");
      console.log(selectedProduct);
    }
  };

  useEffect(() => {
    console.log(addToCart);
  }, [addToCart]);

  return (
    <div className="container">
      {allProducts.length === 0 ? (
        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          No Products Available. Please Add Products!
        </h3>
      ) : (
        allProducts.map((product, idx) => (
          <div
            key={idx}
            style={{
              margin: "10px",
              border: "1px solid black",
              display: "inline-block",
              padding: "15px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                border: "1px solid black",
                padding: "5px",
                margin: "10px",
                display: "inline-block",
                cursor: "pointer",
              }}
              onClick={() => handleCartSubmit(idx)}
            >
              <p>
                <b>Add To Cart</b>
              </p>
            </div>
            <p>
              ID : <b>{product.id}</b>
            </p>
            <p>
              Product Name : <b> {product.name}</b>
            </p>
            <p>
              Product Price : <b>{product.price}</b>
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default AllProducts;
