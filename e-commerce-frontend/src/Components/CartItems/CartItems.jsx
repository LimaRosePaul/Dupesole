import React, { useContext } from "react";
import "./CartItems.css";
import cross_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { products } = useContext(ShopContext);
  const { cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format-main cartitems-format">
                <img className="cartitems-product-icon" src={e.image} alt="" />
                <p cartitems-product-title>{e.name}</p>
                <p>₹{e.new_price}</p> {/* Converted $ to ₹ */}
                <button className="cartitems-quantity">{cartItems[e.id]}</button>
                <p>₹{e.new_price * cartItems[e.id]}</p> {/* Converted $ to ₹ */}
                <img onClick={() => { removeFromCart(e.id) }} className="cartitems-remove-icon" src={cross_icon} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p> {/* Converted $ to ₹ */}
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount()}</h3> {/* Converted $ to ₹ */}
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        
      </div>
    </div>
  );
};

export default CartItems;
