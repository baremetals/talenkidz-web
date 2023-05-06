import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function articles(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const talentedKidCookie = req.cookies.talentedKid;
  if (talentedKidCookie !== undefined) {
    const token = JSON.parse(req.cookies.talentedKid).jwt;
    // console.log('I came here bro');
    if (req.method !== 'POST') {
      return res.status(405).end('Method not allowed');
    }
    try {
      // console.log('=======> i reached here');
      const response = await axios({
        method: 'PUT',
        url: `${baseUrl}/articles/${req.body.data.id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {...req.body},
      });
      console.log('=======>i reached here', response);
      // console.log(response.data, 'fuck sake');
      res.status(200).json({ data: response.data });
    } catch (err: any) {
      // console.log('am not a dope', err);
      console.log('am i dope', err.response.data.error);
      res.status(401).json({ data: err.response.data });
    }
  }
}
