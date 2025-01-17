"use client";
import React, { useEffect } from "react";

const PaymentStatusPage = () => {
  useEffect(() => {
    const fetchPaymentStatus = async () => {
      try {
        const response = await fetch("/api/payments/status");
        
        // Asegúrate de convertir la respuesta en JSON
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json(); // Aquí obtienes el cuerpo de la respuesta en JSON
        console.log(data);

        // Aquí podrías actualizar la UI basada en la respuesta
      } catch (error) {
        console.error("Error fetching payment status:", error);
      }
    };

    fetchPaymentStatus();
  }, []);

  return (
    <div>
      {/* Aquí podrías mostrar el estado del pago basado en 'data' */}
      <h1>Verificando estado del pago...</h1>
    </div>
  );
};

export default PaymentStatusPage;