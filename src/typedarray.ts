import {
  inspectList,
  inspectProperty,
  truncate,
  truncator,
} from "./helpers.js";
import { InspectFn } from "./options.js";

type TypedArray =
  | Int8Array
  | Uint8Array
  | Uint8ClampedArray
  | Int16Array
  | Uint16Array
  | Int32Array
  | Uint32Array
  | Float32Array
  | Float64Array;

const getArrayName = (array: TypedArray) => {
  // We need to special case Node.js' Buffers, which report to be Uint8Array
  // @ts-ignore
  if (typeof Buffer === "function" && array instanceof Buffer) {
    return "Buffer";
  }
  if (array[Symbol.toStringTag]) {
    return array[Symbol.toStringTag];
  }
  return array.constructor.name;
};

const inspectTypedArray: InspectFn = (value, options) => {
  const name = getArrayName(value);
  options.truncate -= name.length + 4;
  // Object.keys will always output the Array indices first, so we can slice by
  // `array.length` to get non-index properties
  const nonIndexProperties = Object.keys(value).slice(value.length);
  if (!value.length && !nonIndexProperties.length) return `${name}[]`;
  // As we know TypedArrays only contain Unsigned Integers, we can skip inspecting each one and simply
  // stylise the toString() value of them
  let output = "";
  for (let i = 0; i < value.length; i++) {
    const string = `${options.colorize(
      truncate(value[i], options.truncate),
      "number"
    )}${i === value.length - 1 ? "" : ", "}`;
    options.truncate -= string.length;
    if (value[i] !== value.length && options.truncate <= 3) {
      output += `${truncator}(${value.length - value[i] + 1})`;
      break;
    }
    output += string;
  }
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, value[key as keyof typeof value]]),
      options,
      inspectProperty as InspectFn
    );
  }
  return `${name}[ ${output}${
    propertyContents ? `, ${propertyContents}` : ""
  } ]`;
};

export default inspectTypedArray;