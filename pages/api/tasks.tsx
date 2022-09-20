import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  description: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { title, description } = req.body;
  console.log(title, description);
  res.status(200).json({ title: title, description: description });
}

