// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  err?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { jwt } = cookies;
  try {
    console.log(req.body)
    const response = await fetch(`${baseUrl}/auth/change-password`, {
      method: 'Post',
      body: JSON.stringify(data),
      headers: { Authentication: `Bearer ${jwt}` },
    });
    await response.json();
    

    res.status(200).json({ message : 'password changed' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err });
  }
}
