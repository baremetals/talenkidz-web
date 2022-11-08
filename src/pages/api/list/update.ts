import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function updateList(req: NextApiRequest, res: NextApiResponse) {
  const talentedKidCookie = req.cookies.talentedKid;
  if (talentedKidCookie !== undefined) {
    const token = JSON.parse(req.cookies.talentedKid).jwt;
    const { data } = req.body;
    const url = `${baseUrl}/${data.formType === 'events' ? 'events' : 'listings'}/${data.entityId}`;
    // console.log(data.data)
    try {
      const response = await axios({
        method: 'PUT',
        url,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
        data: {
          data: data.data,
        },
      });
      console.log(response.data, 'fuck sake');
      res.status(200).json({ data: response.data });
    } catch (err: any) {
      console.log('am i dope', err.response.data);
      res.status(401).json({ data: err.response.data });
    }
  }
}
