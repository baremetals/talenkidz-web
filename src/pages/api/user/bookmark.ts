import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

export default async function bookmark(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { jwt, id } = cookies;

  // console.log(data, id, jwt);
  const url = `${baseUrl}/users/${id}`;

  try {
    // console.log('Firebase Id update', data);
    await axios({
      method: 'PUT',
      url,
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
      data: {
        bookmarklist: data,
      },
    });

    // console.log(bk)

    res.status(200).json({ message: 'Update Successful' });
  } catch (err: any) {
    console.log(err?.response?.data?.error);
    res
      .status(401)
      .json({ message: 'Something went wrong please try again later.' });
  }
}
