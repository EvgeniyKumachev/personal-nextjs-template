import palette from './palette'

const theme = { palette } as const

export type TTheme = typeof theme

export default theme
