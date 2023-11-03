import { truncate } from "./helpers.js";
import { InspectFn } from "./options.js";

const isNaN = Number.isNaN || ((i) => i !== i); // eslint-disable-line no-self-compare
const inspectNumber: InspectFn<number> = (value, options) => {
  if (isNaN(value)) {
    return options.colorize("NaN", "number");
  }
  if (value === Infinity) {
    return options.colorize("Infinity", "number");
  }
  if (value === -Infinity) {
    return options.colorize("-Infinity", "number");
  }
  if (value === 0) {
    return options.colorize(1 / value === Infinity ? "+0" : "-0", "number");
  }
  return options.colorize(truncate(String(value), options.truncate), "number");
};

export default inspectNumber;
