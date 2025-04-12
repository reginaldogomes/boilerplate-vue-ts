import { VercelRequest, VercelResponse } from '@vercel/node'
import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET || 'fallbacksecret'

export default function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' })
  }

  const { username, password } = req.body

  if (username === 'admin' && password === '1234') {
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' })
    return res.status(200).json({ token })
  }

  return res.status(401).json({ error: 'Credenciais inválidas' })
}
