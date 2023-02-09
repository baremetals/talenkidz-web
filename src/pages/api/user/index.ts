import type { NextApiRequest, NextApiResponse } from 'next';

export default async function User(req: NextApiRequest, res: NextApiResponse) {
  const talentedKidCookie = req.cookies.talentedKid;
  if (talentedKidCookie !== undefined) {
    const cookies = JSON.parse(req.cookies.talentedKid);
    try {
      const {
        id,
        username,
        fullName,
        avatar,
        backgroundImg,
        userType,
        orgId,
        slug,
        orgName,
        logo,
        fullProfile,
      } = cookies;
      const user = {
        id,
        username,
        fullName: fullName || '',
        avatar,
        backgroundImg,
        userType,
        orgId: orgId || '',
        slug: slug || '',
        orgName: orgName || '',
        logo: logo || '',
        fullProfile
      };
      res.send(user);
    } catch (err) {
      return;
    }
  } else {
    res.send('nothing');
  }
}
