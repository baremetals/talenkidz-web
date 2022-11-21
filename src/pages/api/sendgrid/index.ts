import client from '@sendgrid/client';
client.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY as string);
import type { NextApiRequest, NextApiResponse } from 'next';

// const baseUrl: string | undefined = process.env.NEXT_PUBLIC_SENDGRID_BASE_URL;

type Data = {
  message: string;
};

export default function sengrid(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
     const { email } = req.body.data;
    const data = {
      list_ids: ['bf02d64b-cbb1-4abd-b4a6-855e073ac38a'],
      contacts: [
        {
          email,
        },
      ],
    };
    client
      .request({
        url: `${process.env.NEXT_PUBLIC_SENDGRID_BASE_URL}/v3/marketing/contacts`,
        method: 'PUT',
        body: data,
      })
      .then(([response, _body]) => {
        // console.log('the status code: ', response.statusCode);
        // console.log('the response.body: ', response.body);
        return res.status(response.statusCode).json({ message: 'email added successfully' });
      })
      .catch((error) => {
        console.error(error.response.body);
      });
  
}
