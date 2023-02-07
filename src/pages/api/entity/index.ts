import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'src/lib/initApollo';
import { ListingsQueryResult, ArticlesQueryResult, EventsQueryResult } from 'generated/graphql';
import { EntityData, ReqBody } from './entitySpec';


type entityQueryResult = ArticlesQueryResult | EventsQueryResult | ListingsQueryResult
export default async function handler(req: NextApiRequest, res: NextApiResponse<EntityData>) {
  const { start, limit, gQDocument, sort = 'createdAt:desc', }: ReqBody = JSON.parse(req.body);

  //   console.log(start, limit);

  try {
    // console.log("getting entities");
    const { data } = await client.query<entityQueryResult>({
      query: gQDocument,
      variables: {
        pagination: {
          start,
          limit,
        },
        sort,
      },
    });

    res.status(200).json({ data });
  } catch (err) {
    console.log(err);
    res.status(401).json({ err });
  }
}