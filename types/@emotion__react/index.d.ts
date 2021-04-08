import '@emotion/react'

import { Theme as AppTheme } from '@app/styles/theme'

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
