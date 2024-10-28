import React, { useContext } from "react";
import shoppingBag from "../Assets/shoppingBag.png";
import logo from "../Assets/logo.png";
import "./Navbar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  const navigate = useNavigate();
  return (
    <div className="navbar border-2 flex justify-around items-center p-5 shadow-md shadow-slate-200	">
      <div className="nav-logo flex items-center gap-4">
        <img src={logo} alt="" height={40} width={40} />
        <p className="text-black font-mono	 font-medium text-lg">
          FlashFusion Finds
        </p>
      </div>

      <ul className="nav-menu flex align-middle list-none gap-8 text-base">
        <li
          onClick={() => {
            setMenu("shop");
            navigate("/");
          }}
          className="flex justify-center flex-col align-middle gap-2 cursor-pointer"
        >
          {" "}
          Shop
          {menu === "shop" ? (
            <hr className="border-none w-[80%] h-[3px] rounded  bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("men");
            navigate("/men");
          }}
          className="flex justify-center flex-col align-middle gap-2 cursor-pointer"
        >
          Men
          {menu === "men" ? (
            <hr className="border-none w-[80%] h-[3px] rounded  bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("women");
            navigate("/women");
          }}
          className="flex justify-center flex-col align-middle gap-2 cursor-pointer"
        >
          Women
          {menu === "women" ? (
            <hr className="border-none w-[80%] h-[3px] rounded  bg-red-600" />
          ) : (
            <></>
          )}
        </li>
        <li
          onClick={() => {
            setMenu("kids");
            navigate("/kids");
          }}
          className="flex justify-center flex-col align-middle gap-2 cursor-pointer"
        >
          Kids
          {menu === "kids" ? (
            <hr className="border-none w-[80%] h-[3px] rounded  bg-red-600" />
          ) : (
            <></>
          )}
        </li>
      </ul>

      <div className="nav-login-cart ">
        <button
          onClick={() => {
            navigate("/login");
          }}
          className="nav login-cart  active:bg-slate-200"
        >
          Login
        </button>
        <img
          onClick={() => {
            navigate("/cart");
          }}
          className="cursor-pointer"
          src={shoppingBag}
          alt=""
          height={40}
          width={40}
        />
        <div className="nav-cart-count  ">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
