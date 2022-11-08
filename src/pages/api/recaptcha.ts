/* eslint-disable promise/always-return */

import axios from "axios"
// import { RECAPTCHA_SECRET } from "lib/constants"

const RECAPTCHA_SECRET = ''
/* eslint-disable @typescript-eslint/no-explicit-any */
export default async function handler(req: any, res: any) {
    try {
        const { token } = req.body
        const result = await axios.post(`https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET}&response=${token}`)
        res.json(result.data)
    } catch (e) {
        res.json({ success: false })
    }
}
