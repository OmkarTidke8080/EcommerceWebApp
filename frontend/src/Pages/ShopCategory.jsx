import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item/Item.jsx";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img
        className="shopcategory-banner block m-[30px] "
        src={props.banner}
        alt=""
      />
      <div className="shopcategory-indexSort flex mx-[170px] justify-between items-center">
        <p>
          <span className="font-medium">Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort p-2 rounded-full border border-gray-500">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>

      <div className="shopcategory-products mx-[170px] my-[20px] grid grid-cols-4 gap-28">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
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
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore flex justify-center items-center m-[150px] my-auto w-[233px] h-[69px] rounded[75px] bg-[#ededed] text-black font-medium text-[18px]">
        Explore more
      </div>
    </div>
  );
}

export default ShopCategory;
