import { NextApiRequest, NextApiResponse } from "next";


// eslint-disable-next-line @typescript-eslint/no-require-imports
const methods = require('micro-method-router')

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const payload = req.body
      
    console.log(JSON.stringify(payload))
    res.status(200).json({ ok: true });
  }})

