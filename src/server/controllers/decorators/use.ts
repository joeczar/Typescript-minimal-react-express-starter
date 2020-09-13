import 'reflect-metadata';
import { MetaKeys } from './MetaKeys';
import { RequestHandler } from 'express';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const middlewares =
      Reflect.getMetadata(MetaKeys.middleware, target, key) || [];

    Reflect.defineMetadata(
      MetaKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
}
