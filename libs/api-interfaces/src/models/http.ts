import * as express from 'express';

export type ResponseError = {
  message: string
}

export interface TypedRequestBody<T> extends Express.Request {
  body: T
}

