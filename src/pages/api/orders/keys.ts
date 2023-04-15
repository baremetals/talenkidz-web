// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const stripePKey = process.env.NEXT_PUBLIC_STRIPE_PK;
type Data = {
  publishableKey?: string;
  error?: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method !== "GET") {
        return res.status(405).end('Method not allowed');
    } else {
        // console.log(stripePKey);
        res.status(200).json({ publishableKey: stripePKey });
    }
  
}
