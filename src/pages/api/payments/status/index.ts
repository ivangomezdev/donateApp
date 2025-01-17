import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const payload = req.body;
    console.log(payload.json());

    return res.status(200).json({ ok: true });
  }

  res.setHeader("Allow", ["POST"]); // Permitir solo POST
  res.status(405).json({ error: "Method Not Allowed" }); // Método no permitido
}