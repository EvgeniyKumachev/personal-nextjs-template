import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme extends App.Theme {}

  export function useTheme(): Theme
}
