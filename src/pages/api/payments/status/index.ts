import { NextApiRequest, NextApiResponse } from "next";
// Aquí podrías usar import en lugar de require si actualizas tu configuración

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const notification = req.body;
    // Validar la firma del webhook aquí

    // Procesar la notificación
    console.log('Webhook received', notification);

    // Guardar o procesar los datos recibidos, por ejemplo, en una base de datos
    // ...

    // Confirmar la recepción
    res.status(200).end();
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}