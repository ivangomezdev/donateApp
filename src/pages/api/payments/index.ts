import { createSingleProductPreference } from "@/lib/mercadopago"
import { methods, send } from "@/lib/micro"
import { myProducts } from "@/lib/products"
import { NextApiRequest, NextApiResponse } from "next"


export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    try {
      const productData = await myProducts();
      const response = await createSingleProductPreference(productData);
      
        
      
      // Aquí podrías usar 'response' si es necesario, por ejemplo, para devolver algo del resultado de la preferencia
      return send(res, 200, response.init_point);
    } catch (error) {
      // Manejo de errores, por ejemplo:
      console.error('Error creating preference:', error);
      return send(res, 500, { error: 'Error creating payment preference' }, 'Error processing request');
    }
  }})