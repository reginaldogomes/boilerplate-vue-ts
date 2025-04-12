// types/Country.ts

export interface Country {
  name: {
    common: string
    official: string
    nativeName?: Record<string, { official: string; common: string }>
  }
  cca3: string
  capital?: string[]
  region: string
  subregion?: string
  population: number
  flags: {
    png: string
    svg: string
    alt?: string
  }
  languages?: Record<string, string>
  currencies?: Record<string, { name: string; symbol: string }>
  timezones?: string[]
  borders?: string[]
}
