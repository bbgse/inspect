import { truncate } from "./helpers.js";
import { InspectFn } from "./options.js";

const inspectRegExp: InspectFn<RegExp> = (value, options) => {
  const flags = value.toString().split("/")[2];
  const sourceLength = options.truncate - (2 + flags.length);
  const source = value.source;
  return options.colorize(
    `/${truncate(source, sourceLength)}/${flags}`,
    "regexp"
  );
};

export default inspectRegExp;
