import type { NextApiRequest, NextApiResponse } from 'next';
import { initializeApollo } from 'src/hooks/apolloClient';
import { MeDocument, MeQuery, UsersPermissionsUser } from 'generated/graphql';

type Data = {
  data?: UsersPermissionsUser;
  err?: any;
};

type regBody = {
  jwt: string;
  id: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { jwt, id }: regBody = JSON.parse(req.body);

  const token = `Bearer ${jwt}`;
  const apolloClient = initializeApollo(null, token);

  try {
    const { data } = await apolloClient.query<MeQuery>({
      query: MeDocument,
      variables: {
        usersPermissionsUserId: id,
      },
    });
    const auth = data?.usersPermissionsUser?.data?.attributes;

    res.status(200).json({
      data: auth as UsersPermissionsUser,
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ err });
  }
}
