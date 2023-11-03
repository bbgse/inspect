import { inspectList } from "./helpers.js";
import { InspectFn } from "./options.js";

const inspectArguments: InspectFn<IArguments> = (args, options) => {
  if (args.length === 0) return "Arguments[]";
  options.truncate -= 13;
  return `Arguments[ ${inspectList(args, options)} ]`;
};

export default inspectArguments;
