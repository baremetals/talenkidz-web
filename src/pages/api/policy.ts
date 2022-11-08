import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

type CookiePolicy = {
  policyOptions: {
    Functional: string;
    Strictly_necessary: string;
    Marketing: string;
    Statistical: string;
    Unclassified: string;
  };
};

type funcType = Data | CookiePolicy;

export default function policy(req: NextApiRequest, res: NextApiResponse<funcType>) {
  const { data } = req.body;

  if (data.flag === 'getCookie') {
    if (!req.cookies.tkpolicy) {
      //  console.log('real money');
      res.status(201).json({ name: 'no cookie' });
    } else {
      // console.log(' nothing here');
      // console.log('the cookie', req.cookies);
      const cookies = JSON.parse(req.cookies.tkpolicy);
      res.status(200).json({ policyOptions: cookies });
    }
  } else {
    const policyOptions = data.policyChoice;
    res.setHeader(
      'Set-Cookie',
      cookie.serialize(
        process.env.POLICY_COOKIE as string,
        JSON.stringify(policyOptions),
        {
          httpOnly: true,
          secure: process.env.NODE_ENV !== 'development',
          //   maxAge: 60 * 60 * 24 * 5, // 5 days
          sameSite: 'strict',
          path: '/',
        }
      )
    );
    res.status(200).json({ name: 'done' });
  }
  //   res.status(200).json({ name: 'John Doe' });
}
