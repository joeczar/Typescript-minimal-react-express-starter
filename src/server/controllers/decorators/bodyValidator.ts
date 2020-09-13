import 'reflect-metadata';
import { MetaKeys } from './MetaKeys';

export function bodyValidator(...keys: string[]) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    Reflect.defineMetadata(MetaKeys.validator, keys, target, key);
  };
}
