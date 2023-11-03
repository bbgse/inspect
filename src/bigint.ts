import { truncate, truncator } from "./helpers.js";
import { InspectFn } from "./options.js";

const inspectBigInt: InspectFn<bigint> = (number, options) => {
  let nums = truncate(number.toString(), options.truncate - 1);
  if (nums !== truncator) nums += "n";
  return options.colorize(nums, "bigint");
};

export default inspectBigInt;
