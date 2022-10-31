// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  content?: string;
  err?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(`${baseUrl}/privacy`);
    const privacy = await response.json();
    // console.log(privacy.data?.attributes?.content);
    const content = privacy.data?.attributes?.content;

    res.status(200).json({ content });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err });
  }
}
