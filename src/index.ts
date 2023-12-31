import inspectArray from "./array.js";
import inspectTypedArray from "./typedarray.js";
import inspectDate from "./date.js";
import inspectFunction from "./function.js";
import inspectMap from "./map.js";
import inspectNumber from "./number.js";
import inspectBigInt from "./bigint.js";
import inspectRegExp from "./regexp.js";
import inspectSet from "./set.js";
import inspectString from "./string.js";
import inspectSymbol from "./symbol.js";
import inspectPromise from "./promise.js";
import inspectClass from "./class.js";
import inspectObject from "./object.js";
import inspectArguments from "./arguments.js";
import inspectError from "./error.js";

import { mergeOptions, type InspectFn, type Options } from "./options.js";
import {
  getTypeName,
  isInstanceOfClass,
  isObject,
  isPlainObject,
} from "./helpers.js";

interface CtorFn {
  new (...args: unknown[]): unknown;
}

const inspectors: Record<string, InspectFn> = {
  undefined: (_, options) => options.colorize("undefined", "undefined"),
  null: (_, options) => options.colorize("null", "null"),

  boolean: (value: boolean, options: Options) =>
    options.colorize(String(value), "boolean"),
  Boolean: (value, options) => options.colorize(String(value), "boolean"),

  number: inspectNumber,
  Number: inspectNumber,

  bigint: inspectBigInt,
  BigInt: inspectBigInt,

  string: inspectString,
  String: inspectString,

  function: inspectFunction,
  Function: inspectFunction,

  symbol: inspectSymbol,
  Symbol: inspectSymbol,

  Array: inspectArray,
  Date: inspectDate,
  Map: inspectMap,
  Set: inspectSet,
  RegExp: inspectRegExp,
  Promise: inspectPromise as InspectFn<Promise<unknown>>,

  // WeakSet, WeakMap are totally opaque to us
  WeakSet: <T extends object>(_: WeakSet<T>, options: Options) =>
    options.colorize("WeakSet{…}", "special"),
  WeakMap: <T extends object>(_: WeakMap<T, unknown>, options: Options) =>
    options.colorize("WeakMap{…}", "special"),

  Arguments: inspectArguments,
  Int8Array: inspectTypedArray,
  Uint8Array: inspectTypedArray,
  Uint8ClampedArray: inspectTypedArray,
  Int16Array: inspectTypedArray,
  Uint16Array: inspectTypedArray,
  Int32Array: inspectTypedArray,
  Uint32Array: inspectTypedArray,
  Float32Array: inspectTypedArray,
  Float64Array: inspectTypedArray,

  Generator: () => "",
  DataView: () => "",
  ArrayBuffer: () => "",

  Error: inspectError,
};

type CustomInspectValue = any | { inspect?: InspectFn };

const inspectCustom = (
  value: CustomInspectValue,
  options: Options,
  type: string
): string => {
  if ("inspect" in value && typeof value.inspect === "function") {
    return value.inspect(options.depth, options);
  }

  return "";
};

export const inspect = (
  value: unknown,
  opts: Partial<Options> = {}
): string => {
  const type = getTypeName(value);
  const options = mergeOptions({ ...opts, inspect });

  // If it is a base value that we already support
  if (type in inspectors) {
    const fn = inspectors[type as keyof typeof inspectors];
    return fn(value, options);
  }

  // If `options.customInspect` is set to true then try to use the custom inspector
  const { customInspect } = options;
  if (customInspect && value) {
    const output = inspectCustom(value, options, type);
    if (output) {
      if (typeof output === "string") return output;
      return inspect(output, options);
    }
  }

  if (isPlainObject(value)) {
    return inspectObject(value, options);
  }

  // If it is a class, inspect it like an object but add the constructor name
  if (isInstanceOfClass(value)) {
    return inspectClass(value, options);
  }

  // If it is an object with an anonymous prototype, display it as an object.
  if (isObject(value)) {
    return inspectObject(value, options);
  }

  // We have run out of options! Just stringify the value
  return options.colorize(String(value), "string");
};

/**
 * Register a custom inspector function for a given type.
 * @param type The string tag of the object, ex "Array", "Map", "Set", etc.
 * @param inspector The inspector function to use for the object
 */
export function registerInspector(type: string, inspector: InspectFn) {
  if (type in inspectors) {
    return false;
  }

  inspectors[type] = inspector;
  return true;
}

export default inspect;
