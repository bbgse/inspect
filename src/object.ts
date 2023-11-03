import { inspectList, inspectProperty } from "./helpers.js";
import { InspectFn } from "./options.js";

const inspectObject: InspectFn<object> = (value, options) => {
  const properties = Object.getOwnPropertyNames(value);
  const symbols = Object.getOwnPropertySymbols
    ? Object.getOwnPropertySymbols(value)
    : [];
  if (properties.length === 0 && symbols.length === 0) {
    return "{}";
  }
  options.truncate -= 4;
  options.seen = options.seen || [];
  if (options.seen.indexOf(value) >= 0) {
    return "[Circular]";
  }
  options.seen.push(value);
  const propertyContents = inspectList(
    properties.map((key) => [key, value[key as keyof typeof value]]),
    options,
    inspectProperty as InspectFn
  );
  const symbolContents = inspectList(
    symbols.map((key) => [key, value[key as keyof typeof value]]),
    options,
    inspectProperty as InspectFn
  );
  options.seen.pop();
  let sep = "";
  if (propertyContents && symbolContents) {
    sep = ", ";
  }
  return `{ ${propertyContents}${sep}${symbolContents} }`;
};

export default inspectObject;