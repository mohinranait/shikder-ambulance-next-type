import React from "react";

const PageLoader = () => {
  return (
    <div className="flex bg-white h-screen w-full items-center justify-center  z-50">
      <div className="loader">
        <div className="loader-item loader-item_1"></div>
        <div className="loader-item loader-item_2"></div>
        <div className="loader-item loader-item_3"></div>
        <div className="loader-item loader-item_4"></div>
      </div>
    </div>
  );
};

export default PageLoader;
