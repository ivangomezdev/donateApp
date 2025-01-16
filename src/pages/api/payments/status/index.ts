
import { NextApiRequest, NextApiResponse } from "next"
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {send} = require('micro')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const methods = require('micro-method-router')

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    try {
      const resData = res
      console.log(resData);
      
        
      
      // Aquí podrías usar 'response' si es necesario, por ejemplo, para devolver algo del resultado de la preferencia
      return send(res, 200);
    } catch (error) {
      // Manejo de errores, por ejemplo:
      console.error('Error creating preference:', error);
      return send(res, 500, { error: 'Error creating payment preference' });
    }
  }})