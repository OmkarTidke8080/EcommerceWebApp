import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";

function CartItems() {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  // Call the function to get the total amount
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cartitems my-[100px] mx-[170px]">
      <div
        style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
        className="grid items-center gap-[75px] p-[20px] text-[18px] font-medium"
      >
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Remove</p>
      </div>
      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div
              key={e.id}
              className="grid items-center gap-[75px] p-[20px] text-[17px] font-medium"
              style={{ gridTemplateColumns: "0.5fr 2fr 1fr 1fr 1fr 1fr" }}
            >
              <img
                className="carticon-product-icon h-[62px]"
                src={e.image}
                alt={e.name}
              />
              <p className="flex-1 ml-4">{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitems-quantity w-[64px] h-[50px] border border-[#ebebeb] bg-[#fff] flex items-center justify-center">
                {cartItems[e.id]}
              </button>
              <img
                className="cartitems-remove-icon w-[15px] m-[10px] ml-12 cursor-pointer"
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt="Remove"
              />
            </div>
          );
        }
        return null;
      })}

      <div className="cartitems-down flex m-[100px]">
        <div className="cartitems-total flex-1 flex flex-col mr-[200px] gap-[40px]">
          <h1 className="text-xl font-semibold">Cart Total</h1>
          <div>
            <div className="cartitems-total-item flex justify-between p-[15px]">
              <p>SubTotal</p>
              <p>${totalAmount.toFixed(2)}</p> {/* Use totalAmount here */}
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between p-[15px]">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item flex justify-between p-[15px]">
              <h3 className="font-bold">Total</h3>
              <h3 className="font-bold">${totalAmount.toFixed(2)}</h3>{" "}
              {/* Use totalAmount here */}
            </div>
          </div>
          <button className="w-[262px] h-[58px] bg-[#ff5a5a] text-white text-[16px] font-medium cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cartitems-promocode flex-1 text-[16px] font-medium">
          <p className="text-[#555]">If you have a promo code, enter it here</p>
          <div className="cartitems-promobox w-[504px] mt-[15px] flex items-center pl-[20px] h-[58px] bg-[#eaeaea]">
            <input
              className="border-none outline-none bg-transparent text-[16px] w-[330px] h-[50px]"
              type="text"
              placeholder="promo code"
            />
            <button className="w-[170px] h-[58px] text-[16px] bg-black text-white cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
