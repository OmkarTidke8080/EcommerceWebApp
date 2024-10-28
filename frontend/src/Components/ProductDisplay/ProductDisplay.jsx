import React from "react";
import star_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useContext } from "react";
function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="productdisplay flex m-[170px] ">
      <div className="productdisplay-left flex gap-[17px] ">
        <div className="productdisplay-img-list flex flex-col gap-[16px] ">
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
          <img className="h-[163px]" src={product.image} alt="" />
        </div>
        <div className="productdisplay-img ">
          <img
            className="productdisplay-main-img w-[700px] h-[700px] "
            src={product.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right  flex flex-col ">
        <h1 className="text-[#3d3d3d] text-[40px] font-medium">
          {product.name}
        </h1>
        <div className="productdisplay-right-star flex items-center mt-14px ml-16 gap-[5px] text-[#1c1c1c] text-[16px]">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="product-display-right-prices flex m-[40px] gap-[30px] text-[24px] font-medium">
          <div className="productdisplay-right-price-old text-[#818181] line-through ">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new text-[#ff4141]">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
          magnam vero neque sequi iusto tempore dicta velit fuga deserunt sed,
          repellendus, aut natus, a assumenda cumque consectetur at? Officia,
          rem.
        </div>
        <div className="productdisplay-right-size">
          <h1 className="mt-[55px] text-[#656565] text-[20px] font-medium">
            Select size
          </h1>
          <div className="productdisplay-right-sizes flex m-[30px] gap-[20px]">
            <div className="p-[18px] py-[24px] bg-[fbfbfb] rounded-[#ebebeb] border-1 cursor-pointer">
              S
            </div>
            <div className="p-[18px] py-[24px] bg-[fbfbfb] rounded-[#ebebeb] border-1 cursor-pointer">
              M
            </div>
            <div className="p-[18px] py-[24px] bg-[fbfbfb] rounded-[#ebebeb] border-1 cursor-pointer">
              L
            </div>
            <div className="p-[18px] py-[24px] bg-[fbfbfb] rounded-[#ebebeb] border-1 cursor-pointer">
              XL
            </div>
            <div className="p-[18px] py-[24px] bg-[fbfbfb] rounded-[#ebebeb] border-1 cursor-pointer">
              XXL
            </div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
          className="p-[20px] ml-[40px] w-[200px] text-[16px] font-medium text-white bg-[#ff4141] mb-[40px] border-none outline-none cursor-pointer"
        >
          ADD TO CART
        </button>
        <p className="product-display-right-category mt-[10px] ">
          {" "}
          <span className="font-medium">
            Category : <span>Women,Tshirt top </span>
          </span>
        </p>
        <p className="product-display-right-category mt-[10px]">
          {" "}
          <span className="font-medium">
            Tags : <span>Modern Latest </span>
          </span>
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
