import {
  fromSnapshot,
  modelSnapshotInWithMetadata,
  onActionMiddleware,
  registerRootStore,
  SnapshotInOf,
} from 'mobx-keystone'

import { RootStore } from './root'

export function initRootStore(snapshot?: SnapshotInOf<RootStore>) {
  const store = snapshot ? fromSnapshot<App.Store>(snapshot) : new RootStore({})

  registerRootStore(store)

  return store
}
