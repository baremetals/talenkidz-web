import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApollo } from 'src/hooks/apolloClient';
import {
  MeDocument,
  MeQuery,
} from 'generated/graphql';
import { TBookMark } from 'src/types';

type Data = {
  data?: TBookMark[] | undefined;
  err?: any;
};



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const cookies = JSON.parse(req.cookies.talentedKid);
  const { jwt, id } = cookies;

  const token = `Bearer ${jwt}`;
  const apolloClient = initializeApollo(null, token);

  try {
    const { data } = await apolloClient.query<MeQuery>({
      query: MeDocument,
      variables: {
        usersPermissionsUserId: id,
      },
    });

    // console.log('getting user', data?.usersPermissionsUser?.data?.attributes?.bookmarklist);

    res.status(200).json({
      data: data?.usersPermissionsUser?.data?.attributes
        ?.bookmarklist as TBookMark[],
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ err });
  }
}
