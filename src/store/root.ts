import { autorun, reaction } from 'mobx'
import {
  _async,
  _await,
  getSnapshot,
  Model,
  model,
  modelFlow,
  modelSnapshotInWithMetadata,
  onActionMiddleware,
  onSnapshot,
  prop
} from 'mobx-keystone'

@model('app/store/root')
export class RootStore extends Model({
  test: prop<string | null>(null)
}) {}
