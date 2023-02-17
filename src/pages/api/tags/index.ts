// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TagsDocument, TagsQuery } from 'generated/graphql';
import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'src/lib/initApollo';
import { TTags } from 'src/types';

type Data = {
  data?: TTags[];
  total?: number;
  err?: any;
};

// type TCats = {
//   data: TTags[];
//   meta: {
//     pagination: {
//       page: number;
//       pageSize: number;
//       pageCount: number;
//       total: number;
//     };
//   };
// };
type ReqBody = {
  filter: string;
  filterItem: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { filterItem }: ReqBody = JSON.parse(req.body);
  try {
    const filterBy =
      filterItem === 'all' || filterItem === 'All'
        ? {}
        : {
            category: {
              name: {
                eq: filterItem,
              },
            },
          };
    const { data } = await client.query<TagsQuery>({
      query: TagsDocument,
      variables: {
        filters: filterBy,
        pagination: {
          start: 0,
          limit: 8,
        },
        sort: 'createdAt:desc',
      },
    });
    const content: TTags[] = data?.tags?.data as TTags[];
    const meta: number = data?.tags?.meta.pagination.total as number;

    res.status(200).json({ data: content, total: meta });
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: err });
  }
}
