

// import axios from "axios"
// // import { RECAPTCHA_SECRET } from "lib/constants"

// const RECAPTCHA_SECRET = ''

// export default async function handler(req: any, res: any) {
//     try {
//         const { token } = req.body
//         const result = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`)
//         res.json(result.data)
//     } catch (e) {
//         res.json({ success: false })
//     }
// }

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
