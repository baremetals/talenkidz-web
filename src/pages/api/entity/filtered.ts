import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from 'src/lib/initApollo';
import { EntityData, ReqBody, entityQueryResult } from './entitySpec';


export default async function handler(req: NextApiRequest, res: NextApiResponse<EntityData>) {
  const {
    start,
    limit,
    gQDocument,
    filterBy,
    sort = 'createdAt:desc',
  }: ReqBody = JSON.parse(req.body);

  // console.log(categories, gQDocument);

  try {
    // console.log("getting entities");
    const { data } = await client.query<entityQueryResult>({
      query: gQDocument,
      variables: {
        filters: filterBy,
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
