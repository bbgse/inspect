import type { InspectFn, Options } from "./options";

export const truncator = "…";

export function truncate(
  string: string | number,
  length: number,
  tail: string = truncator,
) {
  string = String(string);
  const tailLength = tail.length;
  const stringLength = string.length;
  if (tailLength > length && stringLength > tailLength) return tail;

  if (stringLength > length && stringLength > tailLength)
    return `${string.slice(0, length - tailLength)}${tail}`;

  return string;
}

export function inspectList(
  list: ArrayLike<unknown>,
  options: Options,
  inspectItem?: InspectFn,
  separator = ", ",
): string {
  inspectItem = inspectItem || options.inspect;
  const size = list.length;
  if (size === 0) return "";
  const originalLength = options.truncate;
  let output = "";
  let peek = "";
  let truncated = "";
  for (let i = 0; i < size; i += 1) {
    const last = i + 1 === list.length;
    const secondToLast = i + 2 === list.length;
    truncated = `${truncator}(${list.length - i})`;
    const value = list[i];

    // If there is more than one remaining we need to account for a separator of `, `
    options.truncate =
      originalLength - output.length - (last ? 0 : separator.length);
    const string =
      peek || inspectItem!(value, options) + (last ? "" : separator);
    const nextLength = output.length + string.length;
    const truncatedLength = nextLength + truncated.length;

    // If this is the last element, and adding it would
    // take us over length, but adding the truncator wouldn't - then break now
    if (
      last &&
      nextLength > originalLength &&
      output.length + truncated.length <= originalLength
    )
      break;

    // If this isn't the last or second to last element to scan,
    // but the string is already over length then break here
    if (!last && !secondToLast && truncatedLength > originalLength) break;

    // Peek at the next string to determine if we should
    // break early before adding this item to the output
    peek = last
      ? ""
      : inspectItem!(list[i + 1], options) + (secondToLast ? "" : separator);

    // If we have one element left, but this element and
    // the next takes over length, the break early
    if (
      !last &&
      secondToLast &&
      truncatedLength > originalLength &&
      nextLength + peek.length > originalLength
    )
      break;

    output += string;

    // If the next element takes us to length -
    // but there are more after that, then we should truncate now
    if (!last && !secondToLast && nextLength + peek.length >= originalLength) {
      truncated = `${truncator}(${list.length - i - 1})`;
      break;
    }

    truncated = "";
  }
  return `${output}${truncated}`;
}

function quoteComplexKey(key: string): string {
  if (key.match(/^[a-zA-Z_][a-zA-Z_0-9]*$/)) return key;

  return JSON.stringify(key)
    .replace(/'/g, "\\'")
    .replace(/\\"/g, '"')
    .replace(/(^"|"$)/g, "'");
}

export function inspectProperty(
  [key, value]: [unknown, unknown],
  options: Options,
): string {
  options.truncate -= 2;
  if (typeof key === "string") key = quoteComplexKey(key);
  else if (typeof key !== "number") key = `[${options.inspect!(key, options)}]`;

  options.truncate -= (key as string).length;
  value = options.inspect!(value, options);
  return `${key}: ${value}`;
}

export function isClass(value: any) {
  return (
    typeof value === "function" &&
    value.toString().startsWith("class") &&
    value.name !== "class"
  );
}

export function isInstanceOfClass(value: any): value is FunctionConstructor {
  return value?.constructor && isClass(value.constructor);
}

export function isNewable(value: FunctionConstructor) {
  try {
    new value();
    return true;
  } catch {
    return false;
  }
}

export const toString = (v: any) => Object.prototype.toString.call(v);

export function getTypeName(v: any) {
  if (v === null) return "null";
  const type = toString(v).slice(8, -1);
  return typeof v === "object" || typeof v === "function" ? type : typeof v;
}

export function noop() {}

export const isDef = <T = any>(val?: T): val is T => typeof val !== "undefined";
export const isBoolean = (val: any): val is boolean => typeof val === "boolean";
export const isFunction = <T extends Function>(val: any): val is T =>
  typeof val === "function";
export const isNumber = (val: any): val is number => typeof val === "number";
export const isString = (val: unknown): val is string =>
  typeof val === "string";
export const isObject = (val: any): val is object =>
  toString(val) === "[object Object]";
export const isUndefined = (val: any): val is undefined =>
  toString(val) === "[object Undefined]";
export const isNull = (val: any): val is null =>
  toString(val) === "[object Null]";
export const isRegExp = (val: any): val is RegExp =>
  toString(val) === "[object RegExp]";
export const isDate = (val: any): val is Date =>
  toString(val) === "[object Date]";

export function isPlainObject(o: any): o is object {
  var ctor, prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (!hasOwn(prot, "isPrototypeOf")) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

type Primitive = null | undefined | boolean | number | bigint | string | symbol;
type PrimitiveName =
  | "null"
  | "undefined"
  | "boolean"
  | "number"
  | "bigint"
  | "string"
  | "symbol";

export const isPrimitive = (val: any): val is Primitive =>
  typeof val === "object" ? val === null : typeof val !== "function";

export function hasOwn<T>(obj: T, v: PropertyKey) {
  if (obj == null) return false;
  return Object.prototype.hasOwnProperty.call(obj, v);
}

export const identity = <T>(v: T) => v;

type CtorName =
  | "Boolean"
  | "Number"
  | "String"
  | "Symbol"
  | "BigInt"
  | "Array"
  | "Object"
  | "Function"
  | "RegExp"
  | "Date";

type KeyedCollection =
  | Map<any, any>
  | Set<any>
  | WeakMap<any, any>
  | WeakSet<any>;

type KeyedCollectionName = "Map" | "Set" | "WeakMap" | "WeakSet";

type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | BigInt64Array
  | BigUint64Array
  | Float32Array
  | Float64Array;
