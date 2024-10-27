import React from "react";
import new_collection from "../Assets/new_collections";
import Item from "../Item/Item";
function NewCollections() {
  return (
    <div className="new-collections flex flex-col items-center gap-[10px] mb-[100px]   ">
      <h1 className="text-[#171717] font-medium text-[50px]">
        NEW COLLECTIONS
      </h1>
      <hr className="w-[200px] h-[6px] rounded-[10px] bg-[#252525] " />
      <div className="collections grid grid-cols-4 gap-4 mt-[50px] ">
        {new_collection.map((item, index) => {
          return (
            <Item
              key={index}
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

export default NewCollections;
