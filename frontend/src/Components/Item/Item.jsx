import React from "react";
import { Link } from "react-router-dom";

function Item(props) {
  return (
    <div className="item w-[350px] transform transition duration-600 hover:scale-105">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
      </Link>
      <p className="m-[6px]">{props.name}</p>
      <div className="item-prices flex gap-[20px] ">
        <div className="item-price-new text-[#374151] text-[18px] font-medium">
          ${props.new_price}
        </div>
        <div className="item-price-old text-[#8c8c8c] text-[18px] font-medium line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
