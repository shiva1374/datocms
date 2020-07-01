import { NextApiRequest, NextApiResponse } from 'next'

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, name, message } = req.body
  res.send({ success: true, message: 'Thanks!' })
}
