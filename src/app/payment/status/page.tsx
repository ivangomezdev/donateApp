"use client"
import React, { useEffect } from 'react'
const PaymentStatusPage = () => {
  useEffect(() => {
    const fetchPaymentStatus = async () => {
      const response = await fetch("/api/payment/status");
      const data = await response.json();
      console.log(data);
      
      // Aquí podrías actualizar la UI basada en la respuesta
    };
    fetchPaymentStatus();
  }, []);

  return (
    <div>
      {/* Aquí podrías mostrar el estado del pago basado en 'data' */}
    </div>
  )
}

export default PaymentStatusPage;