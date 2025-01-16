import { NextApiRequest, NextApiResponse } from "next";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const {send} = require('micro')
// eslint-disable-next-line @typescript-eslint/no-require-imports
const methods = require('micro-method-router')

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    const payload = req.body
    if (payload.type === "payment") {
        const mpPayment = await payload.data.id;
        console.log(mpPayment);
        
    }
    console.log(payload);
    res.send({ok:true})
  }})