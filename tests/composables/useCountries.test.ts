// tests/composables/useCountries.test.ts
import { describe, it, expect, vi, beforeEach } from 'vitest'
import axios from 'axios'
import { useCountries, fetchCountries } from '../../src/composables/useCountries'

vi.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

describe('useCountries', () => {
  beforeEach(() => {
    vi.resetAllMocks()
  })

  it('deve buscar países com sucesso', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ name: { common: 'Brasil' }, population: 210000000 }],
    })

    const { countries, error, loading } = useCountries()
    await fetchCountries()

    expect(loading.value).toBe(false)
    expect(error.value).toBeNull()
    expect(countries.value.length).toBe(1)
    expect(countries.value[0].name.common).toBe('Brasil')
  })

  it('deve lidar com erro ao buscar países', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('API falhou'))

    const { countries, error, loading } = useCountries()
    await fetchCountries()

    expect(loading.value).toBe(false)
    expect(error.value).toBe('Erro ao buscar países.')
    expect(countries.value.length).toBe(0)
  })
})
