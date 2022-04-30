import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function list(req: NextApiRequest, res: NextApiResponse) {
  const talentedKidCookie = req.cookies.talentedKid;
  if (talentedKidCookie !== undefined) {
    const token = JSON.parse(req.cookies.talentedKid).jwt;
    const { data } = req.body;
    // console.log(data);
    if (data.SEO.type === 'event') {
      try {
        const response = await axios({
          method: 'POST',
          url: `${baseUrl}/events`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          data: req.body,
        });
        // console.log(response.data, 'fuck sake');
        res.status(200).json({ data: response.data });
      } catch (err: any) {
        // console.log('am i dope', err.response.data);
        res.status(401).json({ data: err.response.data });
      }
    } else {
      try {
        const response = await axios({
          method: 'POST',
          url: `${baseUrl}/listings`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          data: req.body,
        });
        // console.log(response.data, 'fuck sake');
        res.status(200).json({ data: response.data.data });
      } catch (err: any) {
        // console.log('am i dope', err.response.data);
        res.status(401).json({ data: err.response.data });
      }
    }
  }
}
