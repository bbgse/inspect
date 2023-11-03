import { inspectList, inspectProperty } from "./helpers.js";
import { InspectFn } from "./options.js";

const inspectArray: InspectFn<ArrayLike<unknown>> = (array, options) => {
  // Object.keys will always output the Array indices first, so we can slice by
  // `array.length` to get non-index properties
  const nonIndexProperties = Object.keys(array).slice(array.length);
  if (!array.length && !nonIndexProperties.length) return "[]";
  options.truncate -= 4;
  const listContents = inspectList(array, options);
  options.truncate -= listContents.length;
  let propertyContents = "";
  if (nonIndexProperties.length) {
    propertyContents = inspectList(
      nonIndexProperties.map((key) => [key, array[key as keyof typeof array]]),
      options,
      inspectProperty as InspectFn
    );
  }
  return `[ ${listContents}${
    propertyContents ? `, ${propertyContents}` : ""
  } ]`;
};

export default inspectArray;