"use client";
import React from "react";


const Bff = () => {
  const applyPayment = async () => {
    const fetchURL = await fetch("https://donate-app-kappa.vercel.app/api/payments");

    const response = await fetchURL.text();
    console.log(response);
    console.log("actualizado");
    
    
    if (response && response !== undefined) {
      
     return window.location.href;
    }
  };

  return (
    <div>
      <button onClick={applyPayment}>PAGAR</button>
    </div>
  );
};

export default Bff;
