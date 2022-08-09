import React from "react";

const Alerta = ({ children }) => {
  return (
    <div className="bg-red-300 text-white inline-block rounded p-1 text-xs">
      {children}
    </div>
  );
};

export default Alerta;
