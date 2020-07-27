import { createContext } from 'react'

import { RootStore } from '@app/store'

export const StoreContext = createContext<RootStore | null>(null)
