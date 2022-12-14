import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-3 ">
      <div className="rounded-full h-12 w-12 animate-spin bg-gradient-to-tr from-orange-300 to-orange-900  ">
        <div className="m-[0.1rem] bg-slate-900 rounded-full h-12 w-12"></div>
      </div>
    </div>
  );
};

export default Loader;
