import type { NextApiRequest, NextApiResponse } from 'next';

export default async function User(req: NextApiRequest, res: NextApiResponse) {
  const talentedKidCookie = req.cookies.talentedKid;
  if (talentedKidCookie !== undefined) {
    const cookies = JSON.parse(req.cookies.talentedKid);
    try {
      const {
        id,
        username,
        email,
        bio,
        website,
        orgType,
        provider,
        fullName,
        avatar,
        backgroundImg,
        userType,
        slug,
        orgName,
      } = cookies;
      const user = {
        id,
        username,
        fullName: fullName || '',
        avatar,
        backgroundImg,
        userType,
        slug: slug || '',
        orgName: orgName || '',
        email,
        bio,
        website,
        orgType,
        provider,
      };
      res.send(user);
    } catch (err) {
      return;
    }
  } else {
    res.send('nothing');
  }
}
