import { useContext } from 'react'

import { StoreContext } from '@app/contexts'

export function useStore() {
  const store = useContext(StoreContext)

  if (!store) {
    // this is especially useful in TypeScript so you don't need to be checking for null all the time
    throw new Error('useStore must be used within a StoreProvider.')
  }

  return store
}

export function useStoreSelect<P = {}>(
  selector: (store: ReturnType<typeof useStore>) => P
) {
  const store = useStore()

  return selector(store)
}
