import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;


type Data = {
  data?: string;
  error?: any;
};
export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const { jwt, id } = JSON.parse(req.cookies.talentedKid);
  // console.log(baseUrl);

  try {
    if (req.method !== 'POST') {
      return res.status(405).end('Method not allowed');
    }
    // console.log('i reached here');
    const response = await axios({
      method: 'POST',
      url: `${baseUrl}/subscriptions`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      data: {
        data: {
          ...req.body,
          price: req.body.paymentOption === 'month' ? 5 : 60,
        },
      },
    });

    await axios({
      method: 'PUT',
      url: `${baseUrl}/users/${id}`,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      data: { membership: 'premium' },
    });

    // console.log('i reached', response.data);
    // console.log(response.data, 'fuck sake');
    // res.status(200).json({});
    res.status(200).json({ data: response.data });
  } catch (err: any) {
    // console.log('am i dope', err);
    // console.log('dope man', err.response.data);
    res.status(401).json({ data: err.response });
  }
}