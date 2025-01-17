  import { NextApiRequest, NextApiResponse } from "next";
  import { Product } from "../../../../app/models/products";

  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const methods = require('micro-method-router')

  export default methods({
   async post(req: NextApiRequest, res: NextApiResponse) {
      const payload = req.body

        
        await Product.sync({ force: true });
        const newProduct = new Product({ name: payload.data.id, precio: payload.id });
        await newProduct.save();
  
      console.log(JSON.stringify(payload))
      res.status(200).json({ ok: true });
    }})

