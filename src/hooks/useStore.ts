import { useStore } from 'mobx-store-provider'

export function useStoreSelect<P = {}>(
  selector: (store: ReturnType<typeof useStore>) => P
) {
  return useStore(selector) as P
}
