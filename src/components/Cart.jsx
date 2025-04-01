import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateQuantity,
  removeProduct,
  calculateTotal,
} from "../store/slices/cartSlice";

const Cart = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartProducts, dispatch]);

  return (
    <>
      <div className="container" style={{ flexDirection: "column" }}>
        {cartProducts.map((product, idx) => (
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
            <p>
              ID : <b>{product.id}</b>
            </p>
            <p>
              Product Name : <b>{product.name}</b>
            </p>
            <p>
              Product Price : <b>{product.price}</b>
            </p>
            <p>
              Product Quantity : <b>{product.quantity}</b>
            </p>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: product.id, type: "increase" }))
              }
            >
              +
            </button>
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: product.id, type: "decrease" }))
              }
              disabled={product.quantity <= 1}
            >
              -
            </button>

            <button
              style={{
                margin: "10px",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => dispatch(removeProduct(product.id))}
            >
              Delete
            </button>
          </div>
        ))}

        <h2>Total Price: ₹{totalPrice}</h2>
      </div>
    </>
  );
};

export default Cart;
