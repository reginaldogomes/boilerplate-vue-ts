export const MESSAGES = {
  SUCCESS: 'Operação realizada com sucesso!',
  ERROR: 'Algo deu errado, tente novamente.',
} as const

export type MessageKey = keyof typeof MESSAGES
