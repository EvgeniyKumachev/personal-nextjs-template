import { css } from 'styled-components'

export const tselect = <T extends string | number | {}>(
  selector: ((theme: App.Theme) => T) | keyof App.Theme
) => <P extends { theme: App.Theme }>({ theme }: P) => {
  const res = typeof selector === 'string' ? theme[selector] : selector(theme)

  return typeof res === 'object' ? css({ ...(res as object) }) : res
}
