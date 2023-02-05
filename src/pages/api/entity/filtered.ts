import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'src/lib/initApollo';
import {
  ListingsQueryResult,
  ArticlesQueryResult,
  EventsQueryResult,
} from 'generated/graphql';

type Data = {
  data?: entityQueryResult;
  err?: any;
};
type entityQueryResult =
  | ArticlesQueryResult
  | EventsQueryResult
  | ListingsQueryResult;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { start, limit, gQDocument, categories } = JSON.parse(req.body);

  // console.log(categories, gQDocument);

  try {
    // console.log("getting entities");
    const { data } = await client.query<entityQueryResult>({
      query: gQDocument,
      variables: {
        filters: {
          category: {
            id: {
              in: categories,
            },
          },
        },
        pagination: {
          start,
          limit,
        },
        sort: 'createdAt:desc',
      },
    });

    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(401).json({ err });
  }
}
