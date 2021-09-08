import { NextApiRequest, NextApiResponse } from 'next'
import { services } from '../../data'
// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {

   console.log('API',services)
res.status(200).json({ services })
}