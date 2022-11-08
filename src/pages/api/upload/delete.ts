import { initializeApollo } from 'lib/apolloClient';
import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import axios from 'axios';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;



export default async function deleteUpload(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const { jwt } = cookies;

    try {
      console.log('Deleting Image');
      await axios({
        method: 'DELETE',
        url: `${baseUrl}/upload/files/${data.id}`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      res.status(200).json({ message: 'Done' });
    } catch (err) {
      res
        .status(401)
        .json({ message: 'Something went wrong please try again later.' });
    }
}
