export const STATUS = {
  ATIVO: 'ativo',
  INATIVO: 'inativo',
  PENDENTE: 'pendente',
} as const

// Type derivado dos valores do objeto
export type StatusType = (typeof STATUS)[keyof typeof STATUS]
