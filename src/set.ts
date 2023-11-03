import { inspectList } from "./helpers.js";
import { InspectFn } from "./options.js";

// TODO: remove
// IE11 doesn't support `Array.from(set)`
function arrayFromSet(set: Set<unknown>) {
  const values: unknown[] = [];
  set.forEach((value) => {
    values.push(value);
  });
  return values;
}

const inspectSet: InspectFn<Set<unknown>> = (value, options) => {
  if (value.size === 0) return "Set(0) {}";
  options.truncate -= 7;
  return `Set(${value.size}) { ${inspectList(arrayFromSet(value), options)} }`;
};

export default inspectSet;
