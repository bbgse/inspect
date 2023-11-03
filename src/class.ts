import inspectObject from './object.js';
import type { InspectFn } from './options.js';

interface Ctor {
  new (...args: any[]): unknown
}

const inspectClass: InspectFn<Ctor> = (value, options) => {
  const toStringTag = value[Symbol.toStringTag as keyof typeof value];
  let name = value.constructor?.name;
  if (!name)
    return "<Anonymous> {}";

  if (toStringTag)
    name += ` [${toStringTag}]`;

  return `${name} ${inspectObject(value, options)}`;
}

export default inspectClass;
