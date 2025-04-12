// api/auth/google.ts
import { OAuth2Client } from 'google-auth-library'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido. Use POST.' })
  }

  const { token } = req.body

  if (!token) {
    return res.status(400).json({ error: 'Token não fornecido.' })
  }

  try {
    const ticket = await client.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    })

    const payload = ticket.getPayload()

    if (!payload) {
      return res.status(401).json({ error: 'Token inválido ou expirado.' })
    }

    // Retorna apenas os dados essenciais do usuário
    const user = {
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    }

    return res.status(200).json({ user })
  } catch (error) {
    console.error('Erro ao verificar o token do Google:', error)
    return res.status(500).json({ error: 'Erro interno na autenticação com o Google.' })
  }
}
