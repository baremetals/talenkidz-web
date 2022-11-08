import type { NextApiRequest, NextApiResponse } from 'next';
import cookie from 'cookie';
import axios from 'axios';

const baseUrl: string | undefined = process.env.NEXT_PUBLIC_API_URL;

type org = {
  id: string;
  username: string;
  backgroundImg: string;
  userType: string;
  jwt: string;
  orgId: string;
  orgName: string;
  slug: string;
  logo: string;
  fullProfile: string;
};

export default async function updateOrganisation(req: NextApiRequest, res: NextApiResponse) {
  const { data } = req.body;
  const cookies = JSON.parse(req.cookies.talentedKid as string);
  const {
    id,
    orgId,
    jwt,
    logo,
    userType,
    fullProfile,
    username,
    backgroundImg,
    slug,
    orgName,
  } = cookies;

  function setTheCookie(user: org) {
    return res.setHeader(
      'Set-Cookie',
      cookie.serialize(
        process.env.COOKIE_NAME as string,
        JSON.stringify(user),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          maxAge: 60 * 60 * 24 * 5, // 5 days
          sameSite: 'strict',
          path: '/',
        }
      )
    );
  }

  // console.log(cookies);

    if (data.flag === 'profileImage') {
      try {
        console.log('profile update');
        const resp = await axios({
          method: 'PUT',
          url: `${baseUrl}/organisations/${orgId}`,
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          data: {
            logo: data.imagefile,
          },
        });

        if (resp?.data) {
          const org: org = {
            id,
            username,
            backgroundImg,
            userType,
            jwt,
            orgId,
            slug,
            orgName,
            logo: data.imagefile,
            fullProfile,
          };
          setTheCookie(org);
        }

        res.status(200).json({ message: 'Image Successfully changed' });
      } catch (err) {
        res
          .status(401)
          .json({ message: 'Something went wrong please try again later.' });
      }
    } else {
        try {
        //   console.log('profile details update', data);

          const resp = await axios({
            method: 'PUT',
            url: `${baseUrl}/organisations/${orgId}`,
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${jwt}`,
            },
            data: {
              ...data,
            },
          });

          if (resp?.data) {
            const org: org = {
              id,
              username: data.username,
              backgroundImg: data.backgroundImg,
              userType,
              jwt,
              orgId,
              slug: data.username,
              orgName: data.name,
              logo,
              fullProfile,
            };
            setTheCookie(org);
          }

          res.status(200).json({ message: 'Details successfully changed.' });
        } catch (err: any) {
            console.log(err);
          res
            .status(401)
            .json({ message: 'Something went wrong please try again later.' });
        }

    }
}

