import React from "react";

function DesctiptionBox() {
  return (
    <div className="descriptionbox mx-[120px] my-[170px]">
      <div className="description-navigator flex">
        <div className="descriptionbox-nav-box flex items-center justify-center text-[16px] font-medium w-[171px] h-[70px] border border-[#d0d0d0]">
          Description
        </div>
        <div className="descriptionbox-nav-box flex items-center justify-center w-[171px] h-[70px] border border-[#d0d0d0] bg-[#FBFBFB] text-[#555]">
          Reviews (145)
        </div>
      </div>
      <div className="descriptionbox-description flex flex-col gap-[25px] border border-[#D0D0D0] p-[48px] pb-[70px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
        sapiente. Distinctio maiores enim velit officia consequatur at, suscipit
        veniam aspernatur neque debitis magnam. Nesciunt reprehenderit illum
        deleniti quis, ipsam, error animi pariatur vero temporibus praesentium
        sapiente sunt fuga quos amet voluptatem fugiat soluta, ratione natus
        excepturi numquam ab. Id, culpa?
      </div>
    </div>
  );
}

export default DesctiptionBox;
