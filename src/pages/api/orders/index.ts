// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  data?: string;
  error?: any;
};

export default async function orders(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const token = JSON.parse(req.cookies.talentedKid).jwt;
    const { data } = req.body;
  try {
    // console.log(stripe)
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}/orders`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: data,
    });
    // console.log('the payment creation: ', paymentIntent);
    return res.status(200).json({ data: response.data });
  } catch (err: any) {
    return res.status(401).json({ data: err.response.data });
  }
}
