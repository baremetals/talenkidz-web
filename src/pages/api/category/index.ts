// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { TCategory } from 'src/types';
const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type Data = {
  data?: TCategory[];
  total?: number;
  err?: any;
};

type TCats = {
  data: TCategory[];
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
};


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const response = await fetch(`${baseUrl}/categories`);
    const cats: TCats = await response.json();
    // console.log(cats);
    const content: TCategory[] = cats.data;
    const meta: number = cats.meta.pagination.total;

    res.status(200).json({ data: content, total: meta });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err });
  }
}
