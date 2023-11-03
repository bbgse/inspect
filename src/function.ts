import { truncate } from "./helpers.js";
import { InspectFn } from "./options.js";

const getFunctionName = (fn: Function) => fn.name || "<anonymous>";

const inspectFunction: InspectFn<Function> = (func, options) => {
  const name = getFunctionName(func);

  if (!name) {
    return options.colorize("[Function]", "special");
  }

  return options.colorize(
    `[Function ${truncate(name, options.truncate - 11)}]`,
    "special"
  );
};

export default inspectFunction;
