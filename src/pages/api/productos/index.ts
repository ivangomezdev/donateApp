import { NextApiRequest, NextApiResponse } from "next";

export default async function (req:NextApiRequest,res:NextApiResponse) {
  try {
    const response = await fetch("https://api.github.com/users");
    const data = await response;
   res.json(data)
  } catch (error) {
    console.error(error);
  }
}
