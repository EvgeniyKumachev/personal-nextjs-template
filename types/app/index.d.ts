import { Request, Response } from 'express'
import { O } from 'ts-toolbelt'

import { RootStore } from '@app/store'
import { TTheme } from '@app/theme'

declare namespace App {
  type Theme = TTheme

  type Store = RootStore

  type ServerRequest = Request
  type ServerResponse = Response
}

export = App
export as namespace App
