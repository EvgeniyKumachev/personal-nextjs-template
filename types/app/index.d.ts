import { Request, Response } from 'express'
import { O } from 'ts-toolbelt'

declare namespace App {
  type ServerRequest = Request
  type ServerResponse = Response
}

export = App
export as namespace App
