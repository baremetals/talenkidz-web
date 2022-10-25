import cookie from 'cookie';
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  name: string;
};

export default function policy(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const { data } = req.body;

    if (data.flag === 'getCookie') {
         if (!req.cookies.tkpolicy) {
           //  console.log('real money');
           res.status(200).json({ name: 'no cookie' });
         } else {
           // console.log(' nothing here');
           // console.log('the cookie', req.cookies);
           const cookies = JSON.parse('');
           res.status(200).json({ name: 'the cookie exist' });
         }

    } else {
        const policyOptions = {
            
        };
        res.setHeader(
          'Set-Cookie',
          cookie.serialize(
            process.env.POLICY_COOKIE as string,
            JSON.stringify(''),
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
