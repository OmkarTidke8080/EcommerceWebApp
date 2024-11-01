import React from "react";
import data_product from "../Assets/data";
import Item from "../Item/Item";

function Popular() {
  return (
    <div className="popular flex flex-col  items-center gap-[10px] h-[90vh]">
      <h1 className="text-[#171717] font-medium text-[50px]">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-[200px] h-[600px] rounded-[10px] bg-[#252525] " />
      <div className="popular-item mt-10 flex gap-[30px]">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
