import React from 'react'

const page = () => {
    const fetchData = async () =>{
        const fetchRes = await fetch("https://donate-app-kappa.vercel.app/api/payment/status")
        const response = await fetchRes
        console.log(response);
        
    }
    fetchData()
  return (
    <div>
      
    </div>
  )
}

export default page
