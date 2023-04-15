// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  message?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { jwt } = cookies;
  try {
    // console.log(data)
    const response = await axios(`${baseUrl}/auth/change-password`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${jwt}` },
      data: {...data},
    });

    res.status(response.status).json({ message: 'password changed' });
  } catch (err: any) {
    // console.log('the errors =============>', err?.response.data.error.message);
    res.status(400).json({ error: err?.response.data.error.message });
  }
}
