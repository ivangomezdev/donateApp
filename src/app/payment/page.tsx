"use client";
import React from "react";


const Bff = () => {
  const applyPayment = async () => {
    const fetchURL = await fetch("http://10.147.19.93:3000/api/payments");

    const response = await fetchURL.text();
    console.log(response);
    
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
