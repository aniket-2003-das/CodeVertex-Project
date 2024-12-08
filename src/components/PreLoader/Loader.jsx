import React from "react";
import LogoIcon from "../../assets/VID-20240901-WA0005_024.svg";

const Loader = () => {
  return (
    <div className="flex items-center justify-center   h-screen text-white">
      <object data={LogoIcon} type="image/svg+xml" />
    </div>
  );
};

export default Loader;
